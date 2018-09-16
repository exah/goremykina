import express from 'express'
import requestLanguage from 'express-request-language'
import { SUPPORTED_LANGS } from './constants'
import api from './server/api'
import renderApp from './server/render-app'

export default function serverRender ({ files }) {
  const router = express.Router()

  router.use(api)
  router.use(requestLanguage({ languages: SUPPORTED_LANGS }))
  router.use(renderApp(files))

  return router
}
