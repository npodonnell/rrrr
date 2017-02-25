"use strict"

const path = require('path')

module.exports = (basePath, prod) => {
	return {
		contentBase: path.resolve(basePath, 'dist'),
		publicPath: 'http://localhost:9999/js/',
		hot: true
	}
}