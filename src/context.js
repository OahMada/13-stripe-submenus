import React, { useState, useContext } from "react";
import sublinks from "./data";

var AppContext = React.createContext();

var AppProvider = ({ children }) => {
	var [isSidebarOpen, setIsSidebarOpen] = useState(false);
	var [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
	var [location, setLocation] = useState({});
	var [page, setPage] = useState({ page: "", links: [] });

	var openSidebar = () => {
		setIsSidebarOpen(true);
	};
	var closeSidebar = () => {
		setIsSidebarOpen(false);
	};

	var openSubmenu = (text, coordiantes) => {
		var page = sublinks.find((menuItem) => menuItem.page == text);
		setPage(page);
		setLocation(coordiantes);
		setIsSubmenuOpen(true);
	};
	var closeSubmenu = () => {
		setIsSubmenuOpen(false);
	};

	return (
		<AppContext.Provider
			value={{
				isSubmenuOpen,
				isSidebarOpen,
				location,
				page,
				openSubmenu,
				openSidebar,
				closeSubmenu,
				closeSidebar,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export var useGlobalContext = () => {
	return useContext(AppContext);
};

export { AppProvider };
