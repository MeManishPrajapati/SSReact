import React from 'react';
import App from './App';
import { Provider } from 'react-redux';
import createStore from './redux/store';
import { hydrateRoot } from 'react-dom/client';

const container = document.getElementById('root');

const state = window.state;

const store = createStore(state);

// window.store = store;

// https://beta.reactjs.org/reference/react-dom/client/hydrateRoot#usage
hydrateRoot(
	container,
	<Provider store={store}>
		<App />
	</Provider>
);
