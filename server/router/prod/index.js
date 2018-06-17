const path = require('path')
const { paths, isDev } = require('config')
const express = require('express')
const router = express.Router()
const ms = require('ms')

const resolveDist = (...file) => path.join(paths.dist, ...file)

const PATH_SERVER = resolveDist('server.js')
const PATH_STATS = resolveDist('stats.json')

const requireOrCrash = (file, message) => {
  try {
    return require(file)
  } catch (e) {
    throw new Error(message)
  }
}

const serverRender = requireOrCrash(
  PATH_SERVER,
  `Server bundle not found at ${PATH_SERVER}. Try running \`npm run build\``
).default

const stats = requireOrCrash(
  PATH_STATS,
  `Client stats not found at ${PATH_STATS}. Try running \`npm run build\``
)

router.use(express.static(paths.dist, { maxAge: ms(isDev ? 0 : '7 days') }))
router.use(serverRender({ clientStats: stats }))

module.exports = router
