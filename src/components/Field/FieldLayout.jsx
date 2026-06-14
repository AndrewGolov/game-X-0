import styles from './FieldLayout.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { fieldSelector, gameEndedSelector, drawSelector } from '../selectors';

export const FieldLayout = () => {
	const dispatch = useDispatch();

	const field = useSelector(fieldSelector);
	const isGameEnded = useSelector(gameEndedSelector);
	const isDraw = useSelector(drawSelector);
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
