import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import { config, PORT, HOST } from './webpack.config';

const server = new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  noInfo: true,
  historyApiFallback: true,
  stats: { colors: true },
});

server.listen(PORT, (err) => {
  if (err) {
    console.error(err);

    return;
  }

  console.log(`Listening at ${ HOST }:${ PORT }`);
});
