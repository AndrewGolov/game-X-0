import { Component } from 'react';
import { connect } from 'react-redux';

class InformationLayout extends Component {
	render() {
		return (
			<h2 className="p-10 text-white">
				{this.props.isGameEnded ? (
					<span className="green">Победитель: {this.props.currentPlayer}</span>
				) : this.props.isDraw ? (
					<span className="yellow">Победила ничья</span>
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
