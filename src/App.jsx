import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import ScrollTop from "./components/ScrollTop";
import Home from "./pages/Home";
import MyAccount from "./pages/MyAccount";
import Trade from "./pages/Trade";
import { handleScrollEffect } from "./components/helpers/handleScrollEffect";
import Footer from "./components/Footer";

function App() {
	return (
		<div className="grid App">
			<Navbar />
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route path="/trade/token/:tokenAddress" element={<Trade />} />
				<Route path="/me" element={<MyAccount />} />
			</Routes>
			<ScrollTop />
			<Footer />
		</div>
	);
}

document.addEventListener("scroll", handleScrollEffect);

export default App;
