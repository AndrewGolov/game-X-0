const initialState = {
	field: ['', '', '', '', '', '', '', '', ''],
	currentPlayerFromStore: 'X',
	isGameEnded: false,
	isDraw: false,
};

export const gameReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case 'SET_CURRENT_PLAYER':
			const { currentPlayerFromPayload } = payload;
			return { ...state, currentPlayerFromStore: currentPlayerFromPayload === 'X' ? 'O' : 'X' };
		case 'RESET_GAME':
			return {
				...state,
				field: ['', '', '', '', '', '', '', '', ''],
				currentPlayerFromStore: 'X',
				isGameEnded: false,
				isDraw: false,
			};

		default:
			return state;
	}
};
