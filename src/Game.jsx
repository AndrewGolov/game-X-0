import { useState, useEffect } from 'react';
import { GameLayout } from './components/GameLayout/GameLayout';
import { createField } from './components/utils/createField';
import { store } from './components/store';
import { checkWin } from './components/utils/checkWin';

export function Game() {
	const [, forceUpdate] = useState({});

	// Временная логика которая уберется

	const [field, setField] = useState(createField());
	// -----------------------------------------------------

	const { dispatch, getState } = store;
	const { currentPlayerFromStore, isDraw, isGameEnded } = getState();

	const restartGame = () => {
		dispatch({ type: 'RESET_GAME' });
	};

	const stepInGame = (i) => {
		if (field[i] !== '' || isGameEnded || isDraw) return;
		const newField = [...field.slice(0, i), currentPlayerFromStore, ...field.slice(i + 1)];
		if (checkWin(newField, currentPlayerFromStore)) {
			dispatch({ type: 'SET_IS_GAME_ENDED', payload: { isGameEnded: true } });
			setField([...newField]);
			return;
		}
		if (!newField.includes('') && !isGameEnded) {
			setField([...newField]);
			// setIsDraw(true); изменение состояния ничья
			return;
		}

		dispatch({
			type: 'SET_CURRENT_PLAYER',
			payload: { currentPlayerFromPayload: currentPlayerFromStore },
		});
		setField([...newField]);
	};
	useEffect(() => {
		const unsubscribe = store.subscribe(() => {
			forceUpdate({});
		});
		return unsubscribe;
	}, []);
	return <GameLayout field={field} stepInGame={stepInGame} restartGame={restartGame} />;
}
