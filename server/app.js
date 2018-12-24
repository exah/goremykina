const ms = require('ms')
const config = require('config')
const express = require('express')
const compression = require('compression')
const bodyParser = require('body-parser')
const webpackUniversalAndHot = require('@exah/webpack-universal-hot-middleware')
const webpackConfig = require(config.paths.root + '/webpack.config.js')
const fetch = require('node-fetch')

const app = express()

app.use(bodyParser.json())
app.use(compression({ threshold: 0 }))

app.use(express.static(config.paths.public, {
  maxAge: config.isDev ? 0 : ms('7 days')
}))

app.use(webpackUniversalAndHot({
  webpackConfig,
  isDev: config.isDev,
  isHot: true,
  clientEntry: 'main',
  serverEntry: 'server',
  clientStatsFileName: 'clientStats.json',
  serverStatsFileName: 'serverStats.json'
}))

global.fetch = fetch
module.exports = app
