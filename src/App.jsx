import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import MyAccount from "./pages/MyAccount";
import Trade from "./pages/Trade";

function App() {
	return (
		<div className="grid App">
			<Navbar />
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route path="/trade/token/:tokenAddress" element={<Trade />} />
				<Route path="/me" element={<MyAccount />} />
			</Routes>
		</div>
	);
}

export default App;
