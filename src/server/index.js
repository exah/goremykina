import express from 'express'
import requestLanguage from 'express-request-language'
import { SUPPORTED_LANGS } from '../constants'
import render from './render'
import api from './api'

export default function serverRender({ files }) {
  const router = express.Router()

  router.use(api)
  router.use(requestLanguage({ languages: SUPPORTED_LANGS }))
  router.use(render(files))

  return router
}
