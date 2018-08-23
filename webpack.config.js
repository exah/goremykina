const path = require('path')
const config = require('config')
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
  include: config.paths.src,
  loader: 'babel-loader',
  options: {
    cacheDirectory: true,
    plugins: [ 'react-hot-loader/babel' ]
  }
}

const getFilename = (ext) => config.isProd
  ? `[name].[hash].${ext}`
  : `[name].${ext}`

const clientConfig = {
  name: 'client',
  target: 'web',
  mode: nodeEnv,
  entry: {
    main: './src/client.js'
  },
  output: {
    path: config.paths.dist,
    filename: getFilename('js'),
    chunkFilename: getFilename('js'),
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
  optimization: {
    runtimeChunk: {
      name: 'runtime'
    },
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /node_modules/,
          name: 'vendors',
          chunks: 'initial'
        }
      }
    }
  },
  plugins: [
    new CSSPlugin({
      filename: getFilename('css')
    })
  ].concat(config.isProd
    ? [ new StatsPlugin('clientStats.json', { chunkModules: true }) ]
    : []
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
  optimization: { nodeEnv },
  plugins: [].concat(config.isProd
    ? [ new StatsPlugin('serverStats.json', { chunkModules: true }) ]
    : []
  )
}

module.exports = [
  clientConfig,
  serverConfig
]
