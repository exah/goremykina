path = require 'path'
webpack = require 'webpack'

HOST = "0.0.0.0"
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
      { test: /\.css$/, loaders: ['style', 'css']},
      { test: /\.cjsx$/, loaders: ['react-hot', 'coffee', 'cjsx']},
      { test: /\.coffee$/, loader: 'coffee' }
    ]
	}
}

module.exports = {
	HOST: HOST
	PORT: PORT
	wp: wp
}
