import { useState, useEffect } from 'react';
import { GameLayout } from './components/GameLayout/GameLayout';

import { store } from './components/store';
import { checkWin } from './components/utils/checkWin';

export function Game() {
	const { dispatch, getState } = store;
	const { currentPlayer, isDraw, isGameEnded, field } = getState();
	const [, forceUpdate] = useState({});

	const restartGame = () => {
		dispatch({
			type: 'RESET_GAME',
			payload: {
				field: ['', '', '', '', '', '', '', '', ''],
				currentPlayer: 'X',
				isGameEnded: false,
				isDraw: false,
			},
		});
	};

	const stepInGame = (i) => {
		if (field[i] !== '' || isGameEnded || isDraw) return;
		dispatch({
			type: 'STEP_IN_GAME',
			payload: [...field.slice(0, i), currentPlayer, ...field.slice(i + 1)],
		});

		if (checkWin(field, currentPlayer)) {
			console.log('Победитель:', currentPlayer);
		}
		// 	dispatch({ type: 'SET_IS_GAME_ENDED', payload: { isGameEnded: true } });
		// 	dispatch({ type: 'SET_FIELD', payload: { field: [...newField] } });
		// 	return;
		// }
		// if (!newField.includes('') && !isGameEnded) {
		// 	dispatch({ type: 'SET_FIELD', payload: { field: [...newField] } });
		// 	// setIsDraw(true); изменение состояния ничья
		// 	return;
		// }

		// dispatch({
		// 	type: 'SET_CURRENT_PLAYER',
		// 	payload: { currentPlayerFromPayload: currentPlayerFromStore },
		// });
		// dispatch({ type: 'SET_FIELD', payload: { field: [...newField] } });
	};
	useEffect(() => {
		const unsubscribe = store.subscribe(() => {
			forceUpdate({});
		});
		return unsubscribe;
	}, []);

	return <GameLayout stepInGame={stepInGame} restartGame={restartGame} />;
}
