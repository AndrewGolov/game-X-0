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
		const newField = [...field.slice(0, i), currentPlayer, ...field.slice(i + 1)];
		if (checkWin(newField, currentPlayer)) return dispatch({ type: 'SET_IS_GAME_ENDED', payload: true });

		dispatch({
			type: 'STEP_IN_GAME',
			payload: newField,
		});
	};
	useEffect(() => {
		const unsubscribe = store.subscribe(() => {
			forceUpdate({});
		});
		return unsubscribe;
	}, []);

	return <GameLayout stepInGame={stepInGame} restartGame={restartGame} />;
}
