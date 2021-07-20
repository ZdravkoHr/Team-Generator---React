import { createContext, useContext, useReducer } from 'react';
import reducer from './reducer';
import menuIcons from './icons';

const AppContext = createContext();

const AppProvider = ({ children }) => {
	const initialState = { openedModal: null };
	const [state, dispatch] = useReducer(reducer, initialState);

	const openModal = modal => {
		dispatch({ type: 'OPEN_MODAL', payload: modal });
	};

	const provide = {
		menuIcons,
		state,
		openModal,
	};

	return <AppContext.Provider value={provide}>{children}</AppContext.Provider>;
};

const useGlobalContext = () => {
	return useContext(AppContext);
};

export default AppProvider;

export { useGlobalContext };
