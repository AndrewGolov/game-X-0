import styles from './InformationLayout.module.css';
import { connect } from 'react-redux';

const InformationLayout = ({ currentPlayer, isGameEnded, isDraw }) => {
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
const mapStateToProps = (state) => ({
	currentPlayer: state.currentPlayer,
	isGameEnded: state.isGameEnded,
	isDraw: state.isDraw,
});

export const InformationComponent = connect(mapStateToProps)(InformationLayout);
