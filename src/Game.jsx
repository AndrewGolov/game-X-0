import { useState, useEffect } from 'react';
import { GameLayout } from './components/GameLayout/GameLayout';
import { createField } from './components/utils/createField';
import { store } from './components/store';
import { checkWin } from './components/utils/checkWin';

export function Game() {
	const [, forceUpdate] = useState({});

	// Временная логика которая убереться
	const [isGameEnded, setIsGameEnded] = useState(false);
	const [isDraw, setIsDraw] = useState(false);
	const [field, setField] = useState(createField());
	// -----------------------------------------------------

	const { dispatch, getState } = store;
	const { currentPlayerFromStore } = getState();

	const restartGame = () => {
		setField(createField());
		setIsGameEnded(false);
		setIsDraw(false);
		dispatch({
			type: 'SET_CURRENT_PLAYER',
			payload: { currentPlayerFromStore: 'X' },
		});
	};

	const stepInGame = (i) => {
		if (field[i] !== '' || isGameEnded || isDraw) return;
		const newField = [...field.slice(0, i), currentPlayerFromStore, ...field.slice(i + 1)];
		if (checkWin(newField, currentPlayerFromStore)) {
			setIsGameEnded(true);
			setField([...newField]);
			return;
		}
		if (!newField.includes('') && !isGameEnded) {
			setField([...newField]);
			setIsDraw(true);
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
	return (
		<GameLayout
			isGameEnded={isGameEnded}
			isDraw={isDraw}
			field={field}
			stepInGame={stepInGame}
			restartGame={restartGame}
		/>
	);
}
