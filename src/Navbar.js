import React from "react";
import logo from "./images/logo.svg";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";

const Navbar = () => {
	var { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();

	var displaySubmenu = (e) => {
		// e.stopPropagation();
		var page = e.target.textContent;
		var positionInfo = e.target.getBoundingClientRect();
		var centerPosition = (positionInfo.left + positionInfo.right) / 2;
		// var bottomPosition = positionInfo.bottom - 3;
		var bottomPosition = positionInfo.bottom;
		// console.log(centerPosition, bottomPosition);
		openSubmenu(page, { centerPosition, bottomPosition });
	};

	var handleCloseSubmenu = (e) => {
		if (!e.target.classList.contains("link-btn")) {
			closeSubmenu();
		}
	};

	return (
		// <nav className="nav" onMouseOver={closeSubmenu}>
		<nav className="nav" onMouseOver={handleCloseSubmenu}>
			<div className="nav-center">
				<div className="nav-header">
					<img src={logo} alt="stripe" className="nav-logo" />
					<button className="btn toggle-btn" onClick={openSidebar}>
						<FaBars />
					</button>
				</div>
				<ul className="nav-links">
					<li>
						<button className="link-btn" onMouseOver={displaySubmenu}>
							products
						</button>
					</li>
					<li>
						<button className="link-btn" onMouseOver={displaySubmenu}>
							developers
						</button>
					</li>
					<li>
						<button className="link-btn" onMouseOver={displaySubmenu}>
							company
						</button>
					</li>
				</ul>
				<button className="btn signin-btn">Sign in</button>
			</div>
		</nav>
	);
};

export default Navbar;
