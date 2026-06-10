import { useState, useEffect } from 'react';
import { GameLayout } from './components/GameLayout/GameLayout';

import { store } from './components/store';

export function Game() {
	const { dispatch } = store;
	const [, forceUpdate] = useState({});

	const stepInGame = (i) => {
		dispatch({
			type: 'STEP_IN_GAME',
			payload: i,
		});
	};
	useEffect(() => {
		const unsubscribe = store.subscribe(() => {
			forceUpdate({});
		});
		return unsubscribe;
	}, []);

	return <GameLayout stepInGame={stepInGame} />;
}
