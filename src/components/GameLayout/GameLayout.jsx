import { FieldLayout } from '../Field/FieldLayout';
import { InformationLayout } from '../Information/InformationLayout';
import styles from './GameLayout.module.css';

export const GameLayout = ({ stepInGame, restartGame }) => {
	return (
		<div className={styles.gameContainer}>
			<h1 className={styles.gameTitle}>Игра крестики нолики </h1>
			<InformationLayout />
			<FieldLayout onCellClick={stepInGame} />

			<button className={styles.gameRestartBtn} onClick={() => restartGame()}>
				Начать заново
			</button>
		</div>
	);
};
