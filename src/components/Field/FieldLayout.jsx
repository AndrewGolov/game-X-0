import styles from './FieldLayout.module.css';
import { store } from '../store';

export const FieldLayout = () => {
	const { dispatch, getState } = store;
	const { isGameEnded, isDraw, field } = getState();
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
					onClick={step.bind(null, i)}
					disabled={isGameEnded || isDraw || value !== ''}
				>
					{value}
				</button>
			))}
		</div>
	);
};
