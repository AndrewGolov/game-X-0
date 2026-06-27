import { Component } from 'react';
import styles from './FieldLayout.module.css';
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
			<div className={styles.field}>
				{field.map((value, i) => (
					<button
						className={styles.fieldItem}
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
