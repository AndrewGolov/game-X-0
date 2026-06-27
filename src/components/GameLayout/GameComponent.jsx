import { Component } from 'react';
import { FieldComponent } from '../Field/FieldComponent';
import { InformationComponent } from '../Information/InformationComponent';
import styles from './GameLayout.module.css';
import { connect } from 'react-redux';

class GameLayout extends Component {
	restartGame = () => {
		this.props.dispatch({
			type: 'RESET_GAME',
		});
	};
	render() {
		return (
			<div className={styles.gameContainer}>
				<h1 className={styles.gameTitle}>Игра крестики нолики </h1>
				<InformationComponent />
				<FieldComponent />

				<button className={styles.gameRestartBtn} onClick={this.restartGame}>
					Начать заново
				</button>
			</div>
		);
	}
}

export const GameComponent = connect()(GameLayout);
