const express = require('express')
const webpack = require('webpack')
const middleware = require('webpack-dev-middleware')
const webpackConfigFactory = require('../buildTools/webpackConfigFactory')

const basePath = path.resolve(__dirname, '..')
const prod = (process.env.NODE_ENV === 'production')

const compiler = webpack(webpackConfigFactory(basePath, prod))
const server = express()

server.listen(9999)