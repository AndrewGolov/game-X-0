import styles from './FieldLayout.module.css';
import { connect } from 'react-redux';

const FieldLayout = ({ dispatch, field, isGameEnded, isDraw }) => {
	const step = (i) => {
		dispatch({
			type: 'STEP_IN_GAME',
			payload: i,
		});
	};

	return (
		<div className={styles.field}>
			{field.map((value, i) => (
				<button
					className={styles.fieldItem}
					key={i}
					onClick={() => step(i)}
					disabled={isGameEnded || isDraw || value !== ''}
				>
					{value}
				</button>
			))}
		</div>
	);
};

const mapStateToProps = (state) => ({
	field: state.field,
	isGameEnded: state.isGameEnded,
	isDraw: state.isDraw,
});

export const FieldComponent = connect(mapStateToProps)(FieldLayout);
