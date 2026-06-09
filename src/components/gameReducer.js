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
		case 'SET_IS_GAME_ENDED':
			return {
				...state,
				isGameEnded: payload,
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
