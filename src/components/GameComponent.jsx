import { Component } from 'react';
import { FieldComponent } from './FieldComponent';
import { InformationComponent } from './InformationComponent';
import { connect } from 'react-redux';

class GameLayout extends Component {
	restartGame = () => {
		this.props.dispatch({
			type: 'RESET_GAME',
		});
	};
	render() {
		return (
			<div className="bg-[#363636] text-center h-screen mx-auto flex flex-col items-center">
				<h1 className="text-white text-5xl font-bold my-5">Игра крестики нолики </h1>
				<InformationComponent />
				<FieldComponent />

				<button
					className="mt-5 px-5 py-2.5 text-2xl font-bold cursor-pointer rounded-[10px] bg-white w-[15%] hover:bg-gray-300"
					onClick={this.restartGame}
				>
					Начать заново
				</button>
			</div>
		);
	}
}

export const GameComponent = connect()(GameLayout);
