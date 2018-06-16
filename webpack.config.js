const HTMLPlugin = require('html-webpack-plugin')

module.exports = {
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
  ]
}
