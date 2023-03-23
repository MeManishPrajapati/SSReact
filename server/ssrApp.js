import React from 'react';
import { renderToString } from 'react-dom/server';
// import App from '../src/App';
import createStore from '../src/redux/store';
import { ChunkExtractor } from '@loadable/server';

import { Provider } from 'react-redux';
import { increaseCounter } from '../src/features/Home/reducer';
import { StaticRouter } from 'react-router-dom/server';
import RouteComponent from '../src/routes';
// import { renderRoutes } from 'react-router-config';
// import routes from '../src/routes';

const path = require('path');

const statsFile = path.resolve('./public/loadable-stats.json');
const extractor = new ChunkExtractor({ statsFile });

export default function getHtml(url) {
	const store = createStore();
	const context = {};

	store.dispatch(increaseCounter());

	const jsx = extractor.collectChunks(
		<Provider store={store}>
			<StaticRouter location={url} context={context}>
				<RouteComponent />
			</StaticRouter>
		</Provider>
	);

	const scriptTags = extractor.getScriptTags(); // or extractor.getScriptElements();
	// console.log('scriptTags', scriptTags);
	const html = renderToString(jsx);
	return { html, state: store.getState(), scriptTags };
}
