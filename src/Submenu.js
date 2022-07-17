import React, { useRef, useEffect } from "react";
import { useGlobalContext } from "./context";

const Submenu = () => {
	var {
		isSubmenuOpen,
		location,
		page: { page, links },
	} = useGlobalContext();

	var refContainer = useRef(null);

	// useEffect(() => {
	// 	var { centerPosition, bottomPosition } = location;
	// 	var submenuNode = refContainer.current;
	// 	submenuNode.style.left = `${centerPosition}px`;
	// 	submenuNode.style.top = `${bottomPosition}px`;
	// }, [location]);

	return (
		<aside
			className={`submenu ${isSubmenuOpen && "show"}`}
			ref={refContainer}
			style={{
				left: `${location.centerPosition}px`,
				top: `${location.bottomPosition}px`,
			}}
		>
			<h4>{page}</h4>
			<div
				className={`submenu-center col-${links.length > 3 ? 4 : links.length}`}
			>
				{links.map((item, index) => {
					var { label, icon, url } = item;
					return (
						<a href={url} key={index}>
							{icon}
							{label}
						</a>
					);
				})}
			</div>
		</aside>
	);
};

export default Submenu;
