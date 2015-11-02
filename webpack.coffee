path = require 'path'
webpack = require 'webpack'
postcss = require 'postcss'
postcssImport = require 'postcss-import'

HOST = '0.0.0.0'
PORT = 8765

wp = {
  debug: true
  devtool: "eval"
  entry: [
    "webpack-dev-server/client?http://#{ HOST }:#{ PORT }"
    "webpack/hot/only-dev-server"
    "./index"
  ]
  output: {
    path: path.join(__dirname, "dist")
    filename: "bundle.js"
    publicPath: "/static/"
  }
  resolve: {
    extensions: ['', '.js', '.cjsx', '.coffee']
  }
  resolveLoader: {
    modulesDirectories: ['node_modules']
  }
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
  module: {
    loaders: [
      {
        test: /\.css$/
        loader: "style!css!postcss"
      }
      {
        test: /\.cjsx$/
        loaders: ['react-hot', 'coffee', 'cjsx']
      }
      {
        test: /\.coffee$/,
        loader: 'coffee'
      }
    ]
  }
  postcss: ->
    [
      postcssImport { onImport: (files) => files.forEach(@addDependency) }
      require 'autoprefixer'
      require 'postcss-nested'
      require 'postcss-simple-vars'
    ]
}

module.exports = {
  HOST: HOST
  PORT: PORT
  wp: wp
}
