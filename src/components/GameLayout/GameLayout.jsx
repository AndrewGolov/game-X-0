import { FieldLayout } from '../Field/FieldLayout';
import { InformationLayout } from '../Information/InformationLayout';
// import styles from './GameLayout.module.css';
import { useDispatch } from 'react-redux';

export const GameLayout = () => {
	const dispatch = useDispatch();

	const restartGame = () => {
		dispatch({
			type: 'RESET_GAME',
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
