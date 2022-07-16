import { createContext, Component } from "react";
const appContext = createContext();

class AppProvider extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	async componentDidMount() {}

	render() {
		return (
			<appContext.Provider
				value={{
					...this.state,
				}}
			>
				{this.props.children}
			</appContext.Provider>
		);
	}
}

export { appContext, AppProvider };
