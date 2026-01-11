import styles from './InformationLayout.module.css';

export const InformationLayout = ({ isGameEnded, isDraw, currentPlayer }) => (
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
