"use strict"

const path = require('path')

module.exports = (basePath, prod) => {
	return {
		entry: [
			path.resolve(basePath, 'src/index.js')
		],
		output: {
			path: path.resolve(basePath, 'dist'),
			filename: 'bundle.js'
		}
	}
}