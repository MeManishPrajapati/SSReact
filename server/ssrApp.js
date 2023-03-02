import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../src/App';
import createStore from '../src/redux/store';

import { Provider } from 'react-redux';
import { increaseCounter } from '../src/features/Home/reducer';

export default function getHtml() {
	const store = createStore();

	store.dispatch(increaseCounter());

	const html = renderToString(
		<Provider store={store}>
			<App />
		</Provider>
	);
	return { html, state: store.getState() };
}
