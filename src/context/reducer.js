const reducer = (state, { type, payload }) => {
	if (type === 'OPEN_MODAL') {
		return { ...state, openedModal: payload };
	}
	if (type === 'CLOSE_MODAL') {
		return { ...state, openedModal: null };
	}
	if (type === 'EDIT_TEAM') {
		return {
			...state,
			teams: state.teams.map((team, index) => {
				return index === payload.index
					? { ...team, name: payload.newName }
					: team;
			}),
		};
	}
	if (type === 'SORT_TEAMS') {
		return {
			...state,
			teamsSortedBy: payload,
			teams: state.teams.sort((a, b) => comparer(payload, a.name, b.name)),
		};
	}
	if (type === 'SORT_MEMBERS') {
		return {
			...state,
			membersSortedBy: payload,
			teams: state.teams.map(team => {
				return {
					...team,
					members: team.members.sort((a, b) => comparer(payload, a, b)),
				};
			}),
		};
	}
	if (type === 'UPDATE_SETTINGS') {
		localStorage.setItem('settings', JSON.stringify(payload));
		return {
			...state,
			settings: payload,
		};
	}

	throw new Error('An unknown type of action is provded.');
};

const comparer = (value, a, b) => {
	switch (value) {
		case 'alphabetic+':
			return a.localeCompare(b);
		case 'alphabetic-':
			return b.localeCompare(a);
		case 'length+':
			return a.length - b.length;
		case 'length-':
			return b.length - a.length;
		default:
			return 0;
	}
};

export default reducer;
