const initialState = {
	field: ['', '', '', '', '', '', '', '', ''],
	currentPlayer: 'X',
	isGameEnded: false,
	isDraw: false,
};

export const gameReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case 'STEP_IN_GAME':
			const stepPlayer = state.currentPlayer === 'X' ? 'O' : 'X';
			return {
				field: payload,
				currentPlayer: stepPlayer,
			};

		case 'RESET_GAME':
			return {
				...state,
				...payload,
			};

		default:
			return state;
	}
};
