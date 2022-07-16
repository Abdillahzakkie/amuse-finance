import React from "react";
import reactDom from "react-dom";
import { AiOutlineCompass } from "react-icons/ai";
import { BiUserCircle, BiWalletAlt } from "react-icons/bi";
import { IoIosArrowForward } from "react-icons/io";
import { MdBarChart } from "react-icons/md";
import { HiOutlineDocumentDuplicate } from "react-icons/hi";
import { PortalWrapper } from "./style";

function Panel() {
	const _openTab = <IoIosArrowForward className="icon" />;
	return reactDom.createPortal(
		<PortalWrapper className="grid">
			<div className="list-group">
				<div className="grid list-item">
					<AiOutlineCompass className="icon" />
					<p>Explore</p>
					{_openTab}
				</div>
				<div className="grid list-item">
					<MdBarChart className="icon" />
					<p>Stats</p>
					{_openTab}
				</div>
				<div className="grid list-item">
					<HiOutlineDocumentDuplicate className="icon" />
					<p>Resources</p>
					{_openTab}
				</div>
				<div className="grid list-item">
					<BiUserCircle className="icon" />
					<p>Account</p>
					{_openTab}
				</div>
				<div className="grid list-item">
					<BiWalletAlt className="icon" />
					<p>My Wallet</p>
				</div>
			</div>
		</PortalWrapper>,
		document.getElementById("nav-panel")
	);
}

export default Panel;
