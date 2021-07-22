import { createContext, useContext, useReducer } from 'react';
import reducer from './reducer';
import menuIcons from './icons';
import text from './text';

const AppContext = createContext();

const AppProvider = ({ children }) => {
	const loadSettings = () => {
		return (
			JSON.parse(localStorage.getItem('settings')) || {
				placement: 'inequal',
			}
		);
	};

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
		settings: loadSettings(),
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

	const updateSettings = value => {
		dispatch({ type: 'UPDATE_SETTINGS', payload: value });
	};

	const setTeams = teams => {
		dispatch({ type: 'SET_TEAMS', payload: teams });
	};

	const setExcluded = excluded => {
		dispatch({ type: 'SET_EXCLUDED', payload: excluded });
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
		updateSettings,
		setTeams,
		setExcluded,
	};

	return <AppContext.Provider value={provide}>{children}</AppContext.Provider>;
};

const useGlobalContext = () => {
	return useContext(AppContext);
};

export default AppProvider;

export { useGlobalContext };
