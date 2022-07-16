import { createContext, Component } from "react";
import { ethers } from "ethers";
import axios from "axios";
import {
	abi as AmuseTokenABI,
	address as amuseTokenAddress,
} from "./contractsABI/AmuseTokenABI";

const web3Context = createContext();
class Web3Provider extends Component {
	constructor(props) {
		super(props);

		this.state = {
			loading: true,
			web3: null,
			user: null,
			provider: null,
			alchemy: null,
			etherscanApiKey: "AC7C3RUJTUADG8A7QRQNFQ68QJ2WXED2DZ",
			amuseToken: null,
		};
	}

	async componentDidMount() {
		await this.connectDapp();
	}

	connectDapp = async () => {
		await this.connectWeb3Modal();
	};

	connectWeb3Modal = async () => {
		const provider = new ethers.providers.Web3Provider(window.ethereum);
		const user = await provider.send("eth_requestAccounts", []);

		const amuseToken = new ethers.Contract(
			amuseTokenAddress,
			AmuseTokenABI,
			provider
		);

		await this.loadBlockchainData(provider);

		this.setState({
			loading: false,
			user,
			provider,
			amuseToken,
		});
	};

	// load blockchain data
	loadBlockchainData = async (provider = this.state.provider) => {
		try {
			await this._getERC20TransferEvents(
				provider,
				"0x4d224452801ACEd8B2F0aebE155379bb5D594381"
			);
		} catch (error) {
			return error;
		}
	};

	// getERC20TransferEvents = async (provider, _tokenAddress) => {
	// 	if (!provider) throw new Error("invalid provider received");
	// 	try {
	// 		const _tokenABI = [
	// 			"event Transfer(address indexed from, address indexed to, uint amount)",
	// 		];
	// 		const _contract = new ethers.Contract(_tokenAddress, _tokenABI, provider);
	// 		const _latestBlock = await provider.getBlockNumber();
	// 		const _startBlock = _latestBlock - 10_000;
	// 		console.log("_contract", _contract);
	// 		console.log("_startBlock", _startBlock);
	// 		console.log("_latestBlock", _latestBlock);

	// 		const _result = await _contract.queryFilter(
	// 			"0x10ed43c718714eb63d5aa57b78b54704e256024e",
	// 			_startBlock,
	// 			_latestBlock
	// 		);
	// 		console.log("_result", _result);

	// 		// while (_startBlock < _latestBlock) {}
	// 	} catch (error) {
	// 		console.log(error);
	// 		return error;
	// 	}
	// };

	_getERC20TransferEvents = async (
		_provider,
		_tokenAddress,
		{ etherscanApiKey } = this.state
	) => {
		try {
			const _tempData = [];
			const _latestBlock = await _provider.getBlockNumber();
			let _startBlock = _latestBlock - 1000;

			while (_startBlock < _latestBlock) {
				const _url = `
					https://api.etherscan.io/api
					?module=account
					&action=tokentx
					&contractaddress=${_tokenAddress}
					&startblock=${_startBlock}
					&endblock=${_latestBlock}
					&sort=asc
					&apikey=${etherscanApiKey}
				`;

				const { data } = await axios.get(_url);
				const _response = data.result;
				_startBlock = parseInt(_response[_response.length - 1].blockNumber);
				_tempData.push(..._response);
				break;
			}
			return this._filterTransferEvents(_tempData);
		} catch (error) {
			return error;
		}
	};

	_filterTransferEvents = (_events) => {
		if (!_events || _events.length === 0) return [];
		console.log("_events", _events);

		const _filteredData = _events.map((item) => {
			const {
				blockNumber,
				timeStamp,
				from,
				to,
				value,
				gas,
				gasPrice,
				tokenDecimal,
			} = item;
			return {
				blockNumber,
				timeStamp,
				from,
				to,
				value: value / 10 ** parseInt(tokenDecimal),
				gas,
				gasPrice: ethers.utils.formatUnits(gasPrice, "gwei"),
			};
		});
		console.log("_filteredData", _filteredData);
		return _filteredData;
	};

	// HELPERS FUNCTIONS
	// fromWei = (_amount, { web3 } = this.state) =>
	// 	web3.utils.fromWei(_amount, "ether");

	// toWei = (_amount, { web3 } = this.state) =>
	// 	web3.utils.toWei(_amount, "ether");

	// toChecksumAddress = (_account, { web3 } = this.state) =>
	// 	web3.utils.toChecksumAddress(_account);

	// reRender = async () => await this.loadBlockchainData();

	// updateAccount = async (_newAddress) => {
	// 	this.setState({ user: this.toChecksumAddress(_newAddress) });
	// 	await this.reRender();
	// };

	isAddress = (address) => ethers.utils.isAddress(address);

	render() {
		return (
			<web3Context.Provider
				value={{
					...this.state,
					connectDapp: this.connectDapp,
					// reRender: this.reRender,
					// updateAccount: this.updateAccount,
					// addAmdToMetamask: this.addAmdToMetamask,

					// fromWei: this.fromWei,
					// toWei: this.toWei,

					isAddress: this.isAddress,
				}}
			>
				{this.props.children}
			</web3Context.Provider>
		);
	}
}

export { web3Context, Web3Provider };
