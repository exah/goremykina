const path = require('path')
const config = require('config')
const StatsPlugin = require('stats-webpack-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

const nodeEnv = config.isProd ? 'production' : 'development'

const javascript = (...plugins) => ({
  test: /\.js$/,
  include: config.paths.src,
  loader: 'babel-loader',
  options: {
    cacheDirectory: true,
    plugins: plugins.filter(Boolean)
  }
})

const getFilename = (ext) =>
  config.isProd ? `[name].[hash].${ext}` : `[name].${ext}`

const clientConfig = {
  name: 'client',
  target: 'web',
  mode: nodeEnv,
  entry: {
    main: './src/client'
  },
  output: {
    path: config.paths.distClient,
    filename: getFilename('js'),
    chunkFilename: getFilename('js'),
    publicPath: '/'
  },
  resolve: {
    alias: {
      config$: path.resolve(config.paths.config, './universal.js')
    }
  },
  module: {
    rules: [
      javascript(
        '@babel/plugin-syntax-dynamic-import',
        config.isProd ? require.resolve('react-refresh/babel') : null
      )
    ]
  },
  plugins: config.isProd
    ? [new StatsPlugin('clientStats.json')]
    : [new ReactRefreshWebpackPlugin()]
}

const serverConfig = {
  name: 'server',
  target: 'node',
  mode: config.isProd ? 'none' : 'development',
  entry: {
    server: './src/server'
  },
  output: {
    path: config.paths.distServer,
    publicPath: '/',
    filename: '[name].js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [javascript('babel-plugin-dynamic-import-node')]
  },
  externals: Object.keys(require('./package.json').dependencies),
  performance: { hints: false },
  optimization: { nodeEnv },
  plugins: config.isProd ? [new StatsPlugin('serverStats.json')] : []
}

module.exports = [clientConfig, serverConfig]
