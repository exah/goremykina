import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const APP_PATH = __dirname + '/app';

const config = {
  entry: [
    'normalize-css',
    './app/index.scss',
    'babel-polyfill',
    './app/index.js',
  ],
  output: {
    path: './static',
    filename: '[name].js',
    publicPath: '/',
  },
  resolve: {
    root: APP_PATH,
    extensions: [
      '',
      '.js',
      '.babel.js',
      '.vue',
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
        test: /\.(sass|scss)$/,
        loaders: [
          'style',
          'css',
          'sass',
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
      require('postcss-calc'),
      require('autoprefixer'),
      require('rucksack-css'),
      require('cssnano'),
    ],
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './app/index.html',
      inject: true,
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.DedupePlugin(),
  ]
}

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(
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
  );
} else {
  Object.assign(config, {
    devServer: {
      contentBase: APP_PATH,
      historyApiFallback: true,
    },
    debug: true,
    devtool: 'source-map',
  });
}

export default config;
