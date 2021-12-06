import { createContext, useContext, useReducer, useState } from "react";
import reducer from "./reducer";

const AppContect = createContext();

export const AppProvider = ({ children }) => {

	const initialState = {
		checkedFooterNavItem: "",
		isSidebarOpen: false,
	};
    const [ isArrow, setIsArrow ] = useState(false)

	const [state, dispatch] = useReducer(reducer, initialState);

	const getCheckedFooterNavItem = (id) => {
		dispatch({ type: "CHECKED_FOOTER_NAV_ITEM", payload: id });
	};

	return (
		<AppContect.Provider
			value={{
				...state,
				getCheckedFooterNavItem,
                isArrow, setIsArrow,
			}}
		>
			{children}
		</AppContect.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(AppContect);
};
