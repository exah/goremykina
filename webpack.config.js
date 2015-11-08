import path from 'path';
import webpack from 'webpack';
import postcss from 'postcss';

const HOST = '0.0.0.0';
const PORT = 8765;

const config = {
  debug: true,
  devtool: '#source-map',
  entry: [
    `webpack-dev-server/client?http://${ HOST }:${ PORT }`,
    `webpack/hot/only-dev-server`,
    `./index`,
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/',
  },
  resolve: {
    alias: {
      'components': path.join(__dirname, 'components'),
    },
    extensions: ['', '.vue', '.js', '.json', '.css'],
  },
  resolveLoader: {
    modulesDirectories: ['node_modules'],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel?sourceMap&optional[]=runtime&loose=all'],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        loader: 'style!css!postcss',
      },
      {
        test: /\.vue$/,
        loader: 'vue'
      },
    ]
  },
  postcss: () =>
    [
      require('postcss-import'),
      require('autoprefixer'),
      require('postcss-nested'),
      require('postcss-simple-vars'),
    ]
}

export default {
  HOST: HOST,
  PORT: PORT,
  config: config,
}
