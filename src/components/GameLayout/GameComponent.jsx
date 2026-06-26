import { FieldComponent } from '../Field/FieldComponent';
import { InformationComponent } from '../Information/InformationComponent';
import styles from './GameLayout.module.css';
import { connect } from 'react-redux';

const GameLayout = ({ dispatch }) => {
	const restartGame = () => {
		dispatch({
			type: 'RESET_GAME',
		});
	};
	return (
		<div className={styles.gameContainer}>
			<h1 className={styles.gameTitle}>Игра крестики нолики </h1>
			<InformationComponent />
			<FieldComponent />

			<button className={styles.gameRestartBtn} onClick={restartGame}>
				Начать заново
			</button>
		</div>
	);
};

export const GameComponent = connect()(GameLayout);
