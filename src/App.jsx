import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import ScrollTop from "./components/ScrollTop";
import { handleScrollEffect } from "./components/helpers/handleScrollEffect";

import Home from "./pages/Home";
import MyAccount from "./pages/MyAccount";
import Trade from "./pages/Trade";
import Footer from "./components/Footer";
import "./App.css";
import Contact from "./pages/Contact";

function App() {
	return (
		<div className="grid App">
			<Navbar />
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route path="/me" element={<MyAccount />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/trade/token/:tokenAddress" element={<Trade />} />
			</Routes>
			<ScrollTop />
			<Footer />
		</div>
	);
}

document.addEventListener("scroll", handleScrollEffect);

export default App;
