import styles from './FieldLayout.module.css';

export const FieldLayout = ({ field, onCellClick, isGameEnded, isDraw }) => (
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
