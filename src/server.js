import express from 'express'
import requestLanguage from 'express-request-language'
import flushChunks from 'webpack-flush-chunks'
import * as emotion from 'emotion'
import { SUPPORTED_LANGS } from './constants'
import api from './server/api'
import renderApp from './server/render-app'

export default function serverRender ({ clientStats }) {
  emotion.flush() // Fresh styles on re-build

  const chunks = flushChunks(clientStats)
  const toPublic = (file) => clientStats.publicPath + file

  const files = {
    js: chunks.scripts.map(toPublic),
    css: chunks.stylesheets.map(toPublic)
  }

  const router = express.Router()

  router.use(api)
  router.use(requestLanguage({ languages: SUPPORTED_LANGS }))
  router.use(renderApp(files))

  return router
}
