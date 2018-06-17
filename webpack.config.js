const { host, port } = require('config')
const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')

module.exports = {
  resolve: {
    alias: {
      'config$': path.resolve(__dirname, './config', './universal.js')
    }
  },
  module: {
    rules: [
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
