import { useState } from 'react';
import { GameLayout } from './components/GameLayout/GameLayout';

const WIN_PATTERNS = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8], // Варианты побед по горизонтали
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8], // Варианты побед по вертикали
	[0, 4, 8],
	[2, 4, 6], // Варианты побед по диагонали
];

export function Game() {
	const [currentPlayer, setCurrentPlayer] = useState('X');
	const [isGameEnded, setIsGameEnded] = useState(false);
	const [isDraw, setIsDraw] = useState(false);
	const [field, setField] = useState(['', '', '', '', '', '', '', '', '']);

	const checkForWin = (fieldGame, pattern, player) =>
		pattern.some((pArr) => pArr.every((index) => fieldGame[index] === player));

	const restartGame = () => {
		setField(['', '', '', '', '', '', '', '', '']);
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
