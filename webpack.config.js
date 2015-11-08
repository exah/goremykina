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
      'assets': path.join(__dirname, 'assets'),
      'components': path.join(__dirname, 'components'),
      'filters': path.join(__dirname, 'filters'),
      'pages': path.join(__dirname, 'pages'),
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
        test: /\.svg$/,
        loaders: [
          'raw',
          'svgo'
        ]
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
