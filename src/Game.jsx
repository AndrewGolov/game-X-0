import { useState, useEffect } from 'react';
import { GameLayout } from './components/GameLayout/GameLayout';

import { store } from './components/store';

export function Game() {
	const [, forceUpdate] = useState({});

	useEffect(() => {
		const unsubscribe = store.subscribe(() => {
			forceUpdate({});
		});
		return unsubscribe;
	}, []);

	return <GameLayout />;
}
