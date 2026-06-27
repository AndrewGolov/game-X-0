import { Component } from 'react';
import styles from './InformationLayout.module.css';
import { connect } from 'react-redux';

class InformationLayout extends Component {
	render() {
		return (
			<h2 className={styles.informatioonTitle}>
				{this.props.isGameEnded ? (
					<span className={styles.green}>Победитель: {this.props.currentPlayer}</span>
				) : this.props.isDraw ? (
					<span className={styles.yellow}>Победила ничья</span>
				) : (
					<span>Ход игрока: {this.props.currentPlayer}</span>
				)}
			</h2>
		);
	}
}

const mapStateToProps = (state) => ({
	currentPlayer: state.currentPlayer,
	isGameEnded: state.isGameEnded,
	isDraw: state.isDraw,
});

export const InformationComponent = connect(mapStateToProps)(InformationLayout);
