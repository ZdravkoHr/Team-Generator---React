import { createContext, useContext, useReducer } from 'react';
import reducer from './reducer';
import menuIcons from './icons';
import text from './text';

const AppContext = createContext();

const AppProvider = ({ children }) => {
	const initialState = {
		openedModal: null,
		lang: 'bg',
		teams: [
			{ name: 'Hackers', members: ['John', 'Spectra', 'Alfred'] },
			{
				name: 'Dolphins',
				members: ['Julie', 'Vicky', 'Mark'],
			},
		],
		excluded: [],
		teamsSortedBy: '',
		membersSortedBy: '',
		settings: {
			placement: 'inequal',
		},
	};
	const [state, dispatch] = useReducer(reducer, initialState);

	const openModal = modal => {
		dispatch({ type: 'OPEN_MODAL', payload: modal });
	};

	const closeModal = () => {
		dispatch({ type: 'CLOSE_MODAL' });
	};

	const editTeam = (index, newName) => {
		dispatch({ type: 'EDIT_TEAM', payload: { index, newName } });
	};

	const sortTeams = value => {
		dispatch({ type: 'SORT_TEAMS', payload: value });
	};

	const sortMembers = value => {
		dispatch({ type: 'SORT_MEMBERS', payload: value });
	};

	const changePlacement = value => {
		console.log(value);
		dispatch({ type: 'CHANGE_PLACEMENT', payload: value });
	};

	const provide = {
		menuIcons,
		state,
		text,
		openModal,
		closeModal,
		editTeam,
		sortTeams,
		sortMembers,
		changePlacement,
	};

	return <AppContext.Provider value={provide}>{children}</AppContext.Provider>;
};

const useGlobalContext = () => {
	return useContext(AppContext);
};

export default AppProvider;

export { useGlobalContext };
