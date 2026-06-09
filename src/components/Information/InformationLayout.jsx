import styles from './InformationLayout.module.css';
import { store } from '../store';

export const InformationLayout = () => {
	const { currentPlayerFromStore, isGameEnded, isDraw } = store.getState();
	return (
		<h2 className={styles.informatioonTitle}>
			{isGameEnded ? (
				<span className={styles.green}>Победитель: {currentPlayerFromStore}</span>
			) : isDraw ? (
				<span className={styles.yellow}>Победила ничья</span>
			) : (
				<span>Ход игрока: {currentPlayerFromStore}</span>
			)}
		</h2>
	);
};
