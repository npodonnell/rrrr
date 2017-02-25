"use strict"

const port = 9999

const path = require('path')
const express = require('express')
const webpack = require('webpack')
const middleware = require('webpack-dev-middleware')
const hotMiddleware = require('webpack-hot-middleware')
const webpackConfigFactory = require('../buildTools/webpackConfigFactory')
const webpackMiddlewareConfigFactory = require('../buildTools/webpackMiddlewareConfigFactory')

const basePath = path.resolve(__dirname, '..')
const prod = (process.env.NODE_ENV === 'production')

const webpackConfig = webpackConfigFactory(basePath, prod)
const webpackMiddlewareConfig = webpackMiddlewareConfigFactory(basePath, prod)

const compiler = webpack(webpackConfig)
const server = express()

server.use(middleware(compiler, webpackMiddlewareConfig))
server.use(hotMiddleware(compiler, { path: '/__webpack_hmr' }))
server.use(express.static('./webroot'))

server.listen(port)
console.log(`Server is running on port ${port}`)

