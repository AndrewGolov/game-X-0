import { useState } from 'react';
import { GameLayout } from './components/GameLayout/GameLayout';
import { createField } from './components/utils/createField';
import { WIN_PATTERNS } from './components/constants/WIN_PATTERNS';

export function Game() {
	const [currentPlayer, setCurrentPlayer] = useState('X');
	const [isGameEnded, setIsGameEnded] = useState(false);
	const [isDraw, setIsDraw] = useState(false);
	const [field, setField] = useState(createField());

	const checkForWin = (fieldGame, pattern, player) =>
		pattern.some((pArr) => pArr.every((index) => fieldGame[index] === player));

	const restartGame = () => {
		setField(createField());
		setIsGameEnded(false);
		setIsDraw(false);
		setCurrentPlayer('X');
	};

	const stepInGame = (i) => {
		if (field[i] !== '' || isGameEnded || isDraw) return;
		const newField = [...field.slice(0, i), currentPlayer, ...field.slice(i + 1)];
		if (checkForWin(newField, WIN_PATTERNS, currentPlayer)) {
			setIsGameEnded(true);
			setField([...newField]);
			return;
		}
		if (!newField.includes('') && !isGameEnded) {
			setField([...newField]);
			setIsDraw(true);
			return;
		}
		setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
		setField([...newField]);
	};

	return (
		<GameLayout
			isGameEnded={isGameEnded}
			isDraw={isDraw}
			currentPlayer={currentPlayer}
			field={field}
			stepInGame={stepInGame}
			restartGame={restartGame}
		/>
	);
}
