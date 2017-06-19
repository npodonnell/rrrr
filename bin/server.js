"use strict"

const PORT = 9997
const INDEXFILE = 'index.html'
const ROOTDIR = 'webroot'

const path = require('path')
const express = require('express')
const webpack = require('webpack')
const middleware = require('webpack-dev-middleware')
const hotMiddleware = require('webpack-hot-middleware')
const send = require('send')
const parseUrl = require('parseurl')

const webpackConfigFactory = require('../configFactories/webpackConfigFactory')
const webpackMiddlewareConfigFactory = require('../configFactories/webpackMiddlewareConfigFactory')

const basePath = path.resolve(__dirname, '..')
const prod = (process.env.NODE_ENV === 'production')

const webpackConfig = webpackConfigFactory(basePath, prod)
const webpackMiddlewareConfig = webpackMiddlewareConfigFactory(basePath, prod)


console.log(JSON.stringify(webpackConfig, null, 4))
console.log(JSON.stringify(webpackMiddlewareConfig, null, 4))


const compiler = webpack(webpackConfig)
const server = express()

server.use(middleware(compiler, webpackMiddlewareConfig))
server.use(hotMiddleware(compiler, { path: '/__webpack_hmr' }))

process.chdir(ROOTDIR)

const indexFilename = path.join(process.cwd(), INDEXFILE)

server.get(/^\/static\//, (request, response) => {
	const filename = path.join(process.cwd(), parseUrl(request).pathname)
	console.log(`Serving ${filename}`)
	send(request, filename).pipe(response)
})

server.get(/.*/, (request, response) => {
	console.log(`Serving ${indexFilename}`)
	send(request, indexFilename).pipe(response)
})


server.listen(PORT)
console.log(`Server is running on port ${PORT}`)

