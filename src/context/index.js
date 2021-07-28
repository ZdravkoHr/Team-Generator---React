import { createContext, useContext, useReducer } from 'react';
import reducer from './reducer';
import menuIcons from './icons';
import text from './text';

const AppContext = createContext();

let notificationTimeout;

const AppProvider = ({ children }) => {
	const loadSettings = () => {
		return (
			JSON.parse(localStorage.getItem('settings')) || {
				placement: 'inequal',
			}
		);
	};

	const language = navigator.language === 'bg' ? 'bg' : 'eng';

	const initialState = {
		openedModal: null,
		openedNotification: false,
		notificationStatus: 'success',
		lang: language,
		teams: [],
		excluded: [],
		teamsSortedBy: '',
		membersSortedBy: '',
		settings: loadSettings(),
	};
	const [state, dispatch] = useReducer(reducer, initialState);

	const openModal = modal => {
		dispatch({ type: 'OPEN_MODAL', payload: modal });
	};

	const openNotification = status => {
		dispatch({ type: 'OPEN_NOTIFICATION', payload: status });
		notificationTimeout && clearTimeout(notificationTimeout);

		notificationTimeout = setTimeout(() => {
			console.log('closing');
			closeNotification();
		}, 3000);
	};

	const closeNotification = () => {
		dispatch({ type: 'CLOSE_NOTIFICATION' });
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
		openNotification,
		closeNotification,
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
