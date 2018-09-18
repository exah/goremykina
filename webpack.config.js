const path = require('path')
const config = require('config')
const CSSPlugin = require('mini-css-extract-plugin')
const StatsPlugin = require('stats-webpack-plugin')
const cssnano = require('cssnano')

const nodeEnv = config.isProd
  ? 'production'
  : 'development'

const css = {
  test: /\.css$/,
  use: [
    CSSPlugin.loader,
    'css-loader',
    {
      loader: 'postcss-loader',
      options: {
        plugins: config.isProd ? [
          cssnano({ preset: [ 'default', { discardComments: { removeAll: true } } ] })
        ] : []
      }
    }
  ]
}

const javascript = (isServer) => ({
  test: /\.js$/,
  include: config.paths.src,
  loader: 'babel-loader',
  options: {
    cacheDirectory: true,
    plugins: [
      isServer ? 'babel-plugin-dynamic-import-node' : '@babel/plugin-syntax-dynamic-import',
      'react-hot-loader/babel'
    ]
  }
})

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
    path: config.paths.distClient,
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
      javascript()
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
    ? [ new StatsPlugin('clientStats.json') ]
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
    path: config.paths.distServer,
    publicPath: '/',
    filename: '[name].js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      javascript(true)
    ]
  },
  externals: Object.keys(require('./package.json').dependencies),
  performance: { hints: false },
  optimization: { nodeEnv },
  plugins: [].concat(config.isProd
    ? [ new StatsPlugin('serverStats.json') ]
    : []
  )
}

module.exports = [
  clientConfig,
  serverConfig
]
