const { host, port } = require('config')
const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')
const CSSPlugin = require('mini-css-extract-plugin')

module.exports = {
  resolve: {
    alias: {
      'config$': path.resolve(__dirname, './config', './universal.js')
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [ CSSPlugin.loader, 'css-loader' ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
          plugins: [ 'react-hot-loader/babel' ]
        }
      }
    ]
  },
  plugins: [
    new CSSPlugin({
      filename: '[name].css'
    }),
    new HTMLPlugin({
      template: './src/template.js',
      inject: false
    })
  ],
  devServer: {
    host,
    port,
    stats: 'minimal',
    disableHostCheck: true,
    historyApiFallback: true
  }
}
