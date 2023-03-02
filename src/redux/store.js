import { configureStore } from '@reduxjs/toolkit';

import home from '../features/Home/reducer';

export default function createStore(initialState) {
	return configureStore({
		preloadedState: initialState,
		reducer: {
			home,
		},
		// do not add dev tool related stuff
		// else it won't be in sync
	});
}
