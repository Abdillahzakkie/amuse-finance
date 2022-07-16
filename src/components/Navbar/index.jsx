import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { BiUserCircle, BiWalletAlt, BiSearch } from "react-icons/bi";
import { FaBars } from "react-icons/fa";
import { NavbarWrapper } from "./style";
import Panel from "./Panel";
import logo from "../../assets/logo/amuse.png";

const _navListDefaults = (
	<>
		<li className="grid">
			<p>
				<Link to="/dashboard">Dashboard</Link>
			</p>
		</li>
		<li className="grid">
			<Link to="/trade">Trade</Link>
		</li>
		<li className="grid">
			<Link to="/resources">Resources</Link>
		</li>
		<li className="grid">
			<Link to="/create">Create</Link>
		</li>
	</>
);

function Navbar() {
	const [navState, setNavState] = useState(false);
	const [searchInput, setSearchInput] = useState("");
	const [mobileSearchState, setMobileSearchState] = useState(false);

	const _handleMobileSearchState = (e) => {
		e.preventDefault();
		if (navState) {
			setNavState(false);
			setMobileSearchState(true);
			return;
		}
		setMobileSearchState((state) => !state);
	};

	const _toggleButton = navState ? (
		<AiOutlineClose
			className="icon toggle-btn"
			onClick={() => setNavState((state) => !state)}
		/>
	) : (
		<FaBars
			className="icon toggle-btn"
			onClick={() => setNavState((state) => !state)}
		/>
	);

	const _handleSubmit = async (e) => {
		e.preventDefault();

		console.log("searchInput", searchInput);
		// clear input
		setSearchInput("");
	};

	return (
		<NavbarWrapper className="grid">
			<div className="grid nav-container">
				<Link to="/" className="grid">
					<div className="grid logo">
						<img src={logo} alt="logo" />
						<h2>amuse</h2>
					</div>
				</Link>

				<form className="grid form-group" onSubmit={_handleSubmit}>
					<input
						type="text"
						value={searchInput}
						className="form-control"
						placeholder="Search items, collections, and accounts"
						onChange={(e) => setSearchInput(e.target.value)}
					/>
				</form>
				{/* large screens xl */}
				<ul className="grid nav-list nav-list-xl">
					{_navListDefaults}
					<li className="grid list-item">
						<Link to="/me">
							<BiUserCircle className="grid icon" />
						</Link>
					</li>
					<li className="grid list-item">
						<BiWalletAlt className="icon" />
					</li>
				</ul>

				{/* normal screens nl */}
				<ul className="grid nav-list nav-list-nl">
					<li className="grid list-item">
						<Link to="/me">
							<BiUserCircle className="grid icon" />
						</Link>
					</li>
					<li className="grid list-item">
						<BiWalletAlt className="icon" />
					</li>
					<li className="grid list-item">{_toggleButton}</li>
				</ul>

				{/* medium screens md */}
				<ul className="grid nav-list nav-list-md">
					<li className="grid list-item">{_toggleButton}</li>
				</ul>

				{/* small screens xs */}
				<ul className="grid nav-list nav-list-xs">
					<li className="grid">
						<BiSearch className="icon" onClick={_handleMobileSearchState} />
					</li>
					<li className="grid">{_toggleButton}</li>

					{/* mobile search form */}
					<div
						className={mobileSearchState ? "grid mobile-search" : "grid hide"}
					>
						<form className="grid form-group-xs" onSubmit={_handleSubmit}>
							<input
								type="text"
								value={searchInput}
								className="form-control"
								placeholder="Search items, collections, and accounts"
								onChange={(e) => setSearchInput(e.target.value)}
							/>
						</form>
					</div>
				</ul>
				{navState && <Panel />}
			</div>
		</NavbarWrapper>
	);
}

export default Navbar;
