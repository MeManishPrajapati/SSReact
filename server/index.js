/* eslint-disable */
// to allow import syntax
require('@babel/register');

const express = require('express');
const path = require('path');
const cors = require('cors');

// https://bytearcher.com/articles/refresh-changes-browser-express-livereload-nodemon/
// When watch-client script is running, we are building frontend and storing in dist folder
// So whenever dist folder updates, we need to serve latest frontend on the browser
// We are using livereload to refresh browserpage
const livereload = require('livereload');
const connectLivereload = require('connect-livereload');

const { default: getHtml } = require('./ssrApp');
const { default: createTemplate } = require('./template');

const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.resolve(__dirname, '../dist'));

const app = express();

const corsOption = {
	origin: ['http://localhost:3000'],
};
app.use(cors(corsOption));
//if you want in every domain then
// app.use(cors());

// When request come on dist, load items from dist folder
// So when browser request for domain/dist/react-script.js, it'll find in dist folder
// app.use('/dist', express.static(path.resolve(__dirname, '../dist')));
// app.use('/public', express.static(path.resolve(__dirname, '../public')));
app.use(express.static(path.resolve(__dirname, '../public')));
// app.use(express.static(path.join(__dirname, 'public')));

// monkey patch every served HTML so they know of changes
app.use(connectLivereload());

// Whenever server code updates, nodemon will restart the server
// at that time we are refreshing browserpage
liveReloadServer.server.once('connection', () => {
	setTimeout(() => {
		liveReloadServer.refresh('/');
	}, 100);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log('Server is listening on port', PORT);
	console.log('Open', `http://localhost:${PORT}`);
});

app.get('/client', (rq, res) => {
	res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.get('*', (req, res) => {
	console.log('in *');
	const { html, state, scriptTags } = getHtml(req.url);
	const htmlPage = createTemplate(html, state, scriptTags);
	res.send(htmlPage);
});
