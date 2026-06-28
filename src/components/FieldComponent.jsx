import { Component } from 'react';
import { connect } from 'react-redux';

class FieldLayout extends Component {
	step = (i) => {
		this.props.dispatch({
			type: 'STEP_IN_GAME',
			payload: i,
		});
	};

	render() {
		const { field, isGameEnded, isDraw } = this.props;
		return (
			<div className="grid grid-cols-[repeat(3,100px)] grid-rows-[repeat(3,100px)] gap-2 p-[7px]">
				{field.map((value, i) => (
					<button
						className="w-full h-full text-2xl m-1 rounded-lg bg-gray-300 hover:bg-white cursor-pointer"
						key={i}
						onClick={() => this.step(i)}
						disabled={isGameEnded || isDraw || value !== ''}
					>
						{value}
					</button>
				))}
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	field: state.field,
	isGameEnded: state.isGameEnded,
	isDraw: state.isDraw,
});

export const FieldComponent = connect(mapStateToProps)(FieldLayout);
