import React from 'react';
import { renderToString } from 'react-dom/server';
// import App from '../src/App';
import createStore from '../src/redux/store';

import { Provider } from 'react-redux';
import { increaseCounter } from '../src/features/Home/reducer';
import { StaticRouter } from 'react-router-dom/server';
import RouteComponent from '../src/routes';
// import { renderRoutes } from 'react-router-config';
// import routes from '../src/routes';

export default function getHtml(url) {
	const store = createStore();

	store.dispatch(increaseCounter());

	const html = renderToString(
		<Provider store={store}>
			<StaticRouter location={url} context={{}}>
				{/* {renderRoutes(routes)} */}
				<RouteComponent />
			</StaticRouter>
		</Provider>
	);
	return { html, state: store.getState() };
}
