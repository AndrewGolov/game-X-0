import styles from './FieldLayout.module.css';
import { store } from '../store';

export const FieldLayout = ({ onCellClick }) => {
	const { isGameEnded, isDraw, field } = store.getState();

	return (
		<div className={styles.field}>
			{field.map((value, i) => (
				<button
					className={styles.fieldItem}
					key={i}
					onClick={() => onCellClick(i)}
					disabled={isGameEnded || isDraw || value !== ''}
				>
					{value}
				</button>
			))}
		</div>
	);
};
