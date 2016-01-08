import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';

const APP_PATH = path.join(__dirname, 'app');

const config = {
  entry: [
    'babel-polyfill',
    './app/index'
  ],
  output: {
    path: './static',
    filename: 'bundle.js',
    publicPath: '/',
  },
  resolve: {
    alias: {
      assets: `${ APP_PATH }/assets`,
      components: `${ APP_PATH }/components`,
      filters: `${ APP_PATH }/filters`,
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
    ],
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './app/index.html',
      inject: true,
    }),
    new webpack.NoErrorsPlugin(),
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
