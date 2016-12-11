const path = require('path')
const webpack = require('webpack')

const base = path.resolve(__dirname, '..')
const prod = (process.env.NODE_ENV === 'production')

const webpackConfig = {
	entry: [
		path.resolve(base, 'src/index.js')
	],
	output: {
		path: path.resolve(base, 'dist'),
		filename: 'bundle.js'
	}
}

const compiler = webpack(webpackConfig)

compiler.run((err, stats) => {

	const jsonStats = stats.toJson()

	if (err) {
		console.error("there was an error")
	} else if (stats) {
		console.log(jsonStats)
	}
})