webpack = require 'webpack'
WebpackDevServer = require 'webpack-dev-server'
config = require './webpack.coffee'

new WebpackDevServer(webpack(config.wp), {
  publicPath: config.wp.output.publicPath
  hot: true
  historyApiFallback: true
  stats: { colors: true }
}).listen(config.PORT, (err) ->
	console.log err if err

	console.log "Listening at #{ config.HOST }:#{ config.PORT }"
)
