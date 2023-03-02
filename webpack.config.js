/* eslint-disable */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = [
	// For client side rendering
	{
		entry: './src/index.js',
		mode: 'development',
		output: {
			path: path.resolve(__dirname, './dist'),
			filename: 'index.js',
		},
		target: 'web',
		devServer: {
			port: '3000',
			static: {
				directory: path.join(__dirname, './public/'),
			},
			open: true,
			hot: true,
			liveReload: true,
		},
		resolve: {
			extensions: ['.js', '.jsx', '.json'],
		},
		module: {
			rules: [
				{
					test: /\.(js|jsx)$/,
					exclude: /node_modules/,
					use: 'babel-loader',
				},
			],
		},
		plugins: [
			new HtmlWebpackPlugin({
				template: path.join(__dirname, 'public', 'index.html'),
			}),
		],
	},
	// For server side rendering
	{
		entry: './src/server.js',
		mode: 'development',
		output: {
			path: path.resolve(__dirname, './public'),
			filename: 'server.js',
		},
		// https://stackoverflow.com/a/63865432/8406320
		devtool: 'source-map',
		target: 'node',
		devServer: {
			port: '8080',
			static: {
				directory: path.join(__dirname, 'public'),
			},
			open: true,
			hot: true,
			liveReload: true,
		},
		resolve: {
			extensions: ['.js', '.jsx', '.json'],
		},
		module: {
			rules: [
				{
					test: /\.(js|jsx)$/,
					exclude: /node_modules/,
					use: 'babel-loader',
				},
			],
		},
		// plugins: [
		// 	new HtmlWebpackPlugin({
		// 		template: path.join(__dirname, 'public', 'index.html'),
		// 	}),
		// ],
	},
];
