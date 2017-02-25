"use strict"

const path = require('path')

module.exports = (basePath, prod) => {
	return {
		entry: [
			path.resolve(basePath, 'src/index.jsx')
		],
		output: {
			path: path.resolve(basePath, 'dist'),
			filename: 'bundle.js'
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
		}
	}
}
