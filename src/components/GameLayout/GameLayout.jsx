import { FieldLayout } from '../Field/FieldLayout';
import { InformationLayout } from '../Information/InformationLayout';
import styles from './GameLayout.module.css';
import { store } from '../store';

export const GameLayout = () => {
	const { dispatch } = store;

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
	return (
		<div className={styles.gameContainer}>
			<h1 className={styles.gameTitle}>Игра крестики нолики </h1>
			<InformationLayout />
			<FieldLayout />

			<button className={styles.gameRestartBtn} onClick={restartGame}>
				Начать заново
			</button>
		</div>
	);
};
