"use strict"

const webpack = require('webpack')
const path = require('path')

module.exports = (basePath, prod) => {
	return {
		entry: [
			path.resolve(basePath, 'src/index.jsx'),
			'webpack-hot-middleware/client?path=/__webpack_hmr'
		],
		output: {
			path: path.resolve(basePath, 'dist'),
			filename: 'bundle.js',
			publicPath: 'http://localhost:9999/js/'
		},
		module: {
			rules: [
				{
					test: /\.jsx?$/,
					include: path.resolve(basePath, 'src'),
					use: {
						loader: 'babel-loader',
						options: {
							presets: ['react']
						}
					}
				}
			]
		},
		plugins: [
			new webpack.HotModuleReplacementPlugin()
		]
	}
}
