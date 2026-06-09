import styles from './InformationLayout.module.css';
import { store } from '../store';

export const InformationLayout = () => {
	const { currentPlayer, isGameEnded, isDraw } = store.getState();
	return (
		<h2 className={styles.informatioonTitle}>
			{isGameEnded ? (
				<span className={styles.green}>Победитель: {currentPlayer}</span>
			) : isDraw ? (
				<span className={styles.yellow}>Победила ничья</span>
			) : (
				<span>Ход игрока: {currentPlayer}</span>
			)}
		</h2>
	);
};
