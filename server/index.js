const { isProd, scale, port, siteUrl } = require('config')
const cluster = require('cluster')

if (isProd && scale && cluster.isMaster) {
  const cpus = require('os').cpus().length
  const scaleNumber = scale !== true ? (scale > cpus ? cpus : scale) : cpus

  console.log(`Master cluster setting up ${scaleNumber} workers...`)
  for (let i = 0; i < scaleNumber; i++) {
    cluster.fork()
  }

  cluster.on('online', (worker) => {
    console.log(`Worker ${worker.process.pid} is online`)
  })
  cluster.on('exit', (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died with code: ${code}, and signal: ${signal}`)
    console.log(`Starting a new worker`)
    cluster.fork()
  })
} else {
  const app = require('./app')

  const server = app.listen(port, () =>
    console.log(`> Server started at ${siteUrl}`)
  )

  module.exports = server
}
