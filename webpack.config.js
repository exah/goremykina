const path = require('path')
const config = require('config')
const webpack = require('webpack')
const CSSPlugin = require('mini-css-extract-plugin')
const StatsPlugin = require('stats-webpack-plugin')

const nodeEnv = config.isProd
  ? 'production'
  : 'development'

const css = {
  test: /\.css$/,
  use: [ CSSPlugin.loader, 'css-loader' ]
}

const javascript = {
  test: /\.js$/,
  exclude: /node_modules/,
  loader: 'babel-loader',
  options: {
    cacheDirectory: true,
    plugins: [ 'react-hot-loader/babel' ]
  }
}

const clientConfig = {
  name: 'client',
  target: 'web',
  mode: nodeEnv,
  entry: {
    main: config.isProd
      ? [ './src/client.js' ]
      : [ 'webpack-hot-middleware/client', './src/client.js' ]
  },
  output: {
    path: config.paths.dist,
    publicPath: '/'
  },
  resolve: {
    alias: {
      'config$': path.resolve(config.paths.config, './universal.js')
    }
  },
  module: {
    rules: [
      css,
      javascript
    ]
  },
  plugins: [
    new CSSPlugin({
      filename: '[name].css'
    })
  ].concat(config.isDev
    ? [ new webpack.HotModuleReplacementPlugin() ]
    : [ new StatsPlugin('stats.json', { chunkModules: true }) ]
  )
}

const serverConfig = {
  name: 'server',
  target: 'node',
  mode: config.isProd ? 'none' : 'development',
  entry: {
    server: './src/server.js'
  },
  output: {
    path: config.paths.dist,
    publicPath: '/',
    filename: '[name].js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [ javascript ]
  },
  externals: Object.keys(require('./package.json').dependencies),
  performance: { hints: false },
  optimization: { nodeEnv }
}

module.exports = [
  clientConfig,
  serverConfig
]
