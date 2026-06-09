import styles from './InformationLayout.module.css';
import { store } from '../store';

const { currentPlayerFromStore } = store.getState();
console.log(currentPlayerFromStore);

export const InformationLayout = ({ isGameEnded, isDraw }) => (
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
