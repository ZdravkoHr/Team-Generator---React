const reducer = (state, { type, payload }) => {
	if (type === 'OPEN_MODAL') {
		return { ...state, openedModal: payload };
	}
	if (type === 'CLOSE_MODAL') {
		return { ...state, openedModal: null };
	}
	return state;
};

export default reducer;
