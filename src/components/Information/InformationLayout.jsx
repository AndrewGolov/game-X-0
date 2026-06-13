import styles from './InformationLayout.module.css';
import { useSelector } from 'react-redux';
import { currentPlayerSelector, drawSelector, gameEndedSelector } from '../selectors';

export const InformationLayout = () => {
	const currentPlayer = useSelector(currentPlayerSelector);
	const isGameEnded = useSelector(gameEndedSelector);
	const isDraw = useSelector(drawSelector);
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
