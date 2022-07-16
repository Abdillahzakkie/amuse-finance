const toFixed = (_amount) => Number(_amount).toFixed(2);

const formatNumber = (_amount) =>
	new Intl.NumberFormat("en", { maximumSignificantDigits: 3 }).format(
		Number(_amount)
	);

const shortener = (_data = "") => {
	_data = _data.split("");
	const _step = 6;
	let _shortenedAddress = [];

	for (let i = 0; i < _step; i++)
		_shortenedAddress = [..._shortenedAddress, _data[i]];
	_shortenedAddress = [..._shortenedAddress, "..."];
	for (let i = _data.length - _step; i < _data.length; i++)
		_shortenedAddress = [..._shortenedAddress, _data[i]];
	return _shortenedAddress.join("");
};

const getEthPrice = async () => {
	try {
		let result = await (
			await fetch(
				`https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=USD`
			)
		).json();
		return result.ethereum.usd;
	} catch (error) {
		console.log(error);
	}
};

const fixedDataArray = async (_data) => {
	if (_data.length <= 10) return _data;
	let _result = [];
	for (let i = 0; i < 10; i++) _result = [..._result, _data[i]];
	return _result;
};

export { toFixed, formatNumber, shortener, getEthPrice, fixedDataArray };
