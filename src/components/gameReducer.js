import { checkWin } from './utils/checkWin';
import { checkIsDraw } from './utils/checkIsDraw';

const initialState = {
	field: ['', '', '', '', '', '', '', '', ''],
	currentPlayer: 'X',
	isGameEnded: false,
	isDraw: false,
};

export const gameReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case 'STEP_IN_GAME':
			const newField = [...state.field.slice(0, payload), state.currentPlayer, ...state.field.slice(payload + 1)];
			const stepPlayer = state.currentPlayer === 'X' ? 'O' : 'X';

			if (checkWin(newField, state.currentPlayer)) {
				return {
					...state,
					field: newField,
					isGameEnded: true,
				};
			}
			if (checkIsDraw(newField)) return { ...state, field: newField, isDraw: true };
			return {
				...state,
				field: newField,
				currentPlayer: stepPlayer,
			};

		case 'RESET_GAME':
			return {
				...initialState,
			};

		default:
			return state;
	}
};
