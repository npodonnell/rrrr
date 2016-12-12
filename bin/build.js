"use strict"

const path = require('path')
const webpack = require('webpack')
const webpackConfigFactory = require('../buildTools/webpackConfigFactory')

const basePath = path.resolve(__dirname, '..')
const prod = (process.env.NODE_ENV === 'production')

const webpackConfig = webpackConfigFactory(basePath, prod)
const compiler = webpack(webpackConfig)

compiler.run((err, stats) => {

	const jsonStats = stats.toJson()

	if (err) {
		console.error("there was an error")
	} else if (stats) {
		console.log(jsonStats)
	}
})
