const config = require('config')
const express = require('express')
const webpack = require('webpack')
const webpackConfig = require(config.paths.root + '/webpack.config.js')
const createDevMiddleware = require('webpack-dev-middleware')
const createHotMiddleware = require('webpack-hot-middleware')
const createHotServerMiddleware = require('webpack-hot-server-middleware')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

webpackConfig.forEach(c => (c.bail = false))

const compiler = webpack(webpackConfig)
const clientCompiler = compiler.compilers.find(c => c.name === 'client')

compiler.apply(new FriendlyErrorsPlugin())

const devMiddleware = createDevMiddleware(compiler, {
  logLevel: 'silent',
  hot: true,
  publicPath: '/',
  serverSideRender: true
})

const hotClientMiddleware = createHotMiddleware(clientCompiler, {
  log: false,
  reload: true
})

const hotServerMiddleware = createHotServerMiddleware(compiler, {
  chunkName: 'server'
})

const router = express.Router()

router.use(devMiddleware)
router.use(hotClientMiddleware)
router.use(hotServerMiddleware)

module.exports = router
