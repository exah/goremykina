import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import path from 'path';

const config = {
  entry: [
    'babel-polyfill',
    './index'
  ],
  output: {
    filename          : 'bundle.js',
    sourceMapFilename : 'bundle.map.js',
    publicPath        : '/static/',
  },
  resolve: {
    alias: {
      assets    : path.join(__dirname, 'assets'),
      components: path.join(__dirname, 'components'),
      filters   : path.join(__dirname, 'filters'),
      pages     : path.join(__dirname, 'pages'),
    },
    extensions: [
      '',
      '.vue',
      '.js',
      '.json',
      '.css'
    ],
  },
  resolveLoader: {
    modulesDirectories: [ 'node_modules' ],
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        loaders: [
          'style',
          'css',
          'postcss',
        ],
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

if (process.env.NODE_ENV === 'production') {
  config.plugins = [
    ...config.plugins,
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new ExtractTextPlugin('[name].css'),
    new webpack.optimize.OccurenceOrderPlugin()
  ]
} else {
  config.debug   = true;
  config.devtool = 'source-map';
}

export default config;
