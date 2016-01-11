import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const APP_PATH = __dirname + '/app';

const config = {
  entry: [
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
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'url',
        query: {
          limit: '20000',
          name: 'assets/images/[name].[ext]?[hash]',
        },
      },
      {
        test: /\.svg$/,
        loaders: [
          'raw',
          'svgo'
        ]
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
  config.module.loaders = [
    ...config.module.loaders,
    {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style', 'css!postcss'),
    },
    {
      test: /\.(sass|scss)$/,
      loader: ExtractTextPlugin.extract('style', 'css!sass!postcss'),
    },
  ];

  config.vue = {
    loaders: {
      css: ExtractTextPlugin.extract('style', 'css!postcss'),
      sass: ExtractTextPlugin.extract('style', 'css!sass!postcss'),
    }
  };

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
    new ExtractTextPlugin('assets/style.css', { allChunks: true }),
  ];
} else {
  config.module.loaders = [
    ...config.module.loaders,
    {
      test: /\.css$/,
      loaders: [
        'style',
        'css?sourceMap',
        'postcss?sourceMap',
      ],
    },
    {
      test: /\.(sass|scss)$/,
      loaders: [
        'style',
        'css?sourceMap',
        'sass?sourceMap',
        'postcss?sourceMap',
      ],
    },
  ];

  config.devServer = {
    contentBase: APP_PATH,
    historyApiFallback: true,
  };

  config.debug = true;
  config.devtool = 'source-map';
}

export default config;
