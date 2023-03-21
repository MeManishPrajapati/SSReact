import React from 'react';
import { Provider } from 'react-redux';
import createStore from './redux/store';
import { hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// import { renderRoutes } from 'react-router-config';
// import routes from './routes';
import RouteComponent from './routes';

const container = document.getElementById('root');

const state = window.state;

const store = createStore(state);

// window.store = store;

// https://beta.reactjs.org/reference/react-dom/client/hydrateRoot#usage
hydrateRoot(
	container,
	<Provider store={store}>
		<BrowserRouter>
			<RouteComponent />
		</BrowserRouter>
	</Provider>
);
