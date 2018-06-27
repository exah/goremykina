import React from 'react'
import { extractCritical } from 'emotion-server'
import { renderToString } from 'react-dom/server'
import { StaticRouter as Router } from 'react-router'
import { Helmet } from 'react-helmet'
import { getAppInitialData } from './hocs/with-data'
import { DEFAULT_LANG, SUPPORTED_LANGS } from './constants'
import template from './template'
import App from './app'

const renderApp = (tree) => {
  const { ids, html, css } = extractCritical(renderToString(tree))
  const head = Helmet.renderStatic()

  return {
    head,
    css,
    cssIds: ids,
    html
  }
}

const renderAppMiddleware = (files, config) => (req, res) => {
  const userLang = req.language || DEFAULT_LANG

  const context = {
    status: 200,
    statusText: 'OK'
  }

  const appTree = (
    <Router location={req.url} context={context}>
      <App userLang={userLang} />
    </Router>
  )

  return getAppInitialData(appTree, { req, res })
    .catch((error) => {
      console.log('Prefetch failed')
      console.error(error)

      context.status = error.status || 500
      context.statusText = error.statusText || 'Unknown error'

      if (context.status >= 300 && context.status < 400 && error.data.location) {
        context.url = error.data.location
      }

      return {}
    })
    .then((initialData) => {
      // Set status based on data prefetching
      res.status(context.status)

      // Somewhere a `<Redirect>` was rendered or RedirectError thrown
      if (context.url) {
        res.redirect(302, context.url)
        console.log(`Redirecting... '${req.path}' -> '${context.url}'`)
        return
      }

      const app = renderApp(appTree)

      const ssrData = {
        config: config.public,
        cssIds: app.cssIds,
        initialData,
        userLang
      }

      res.send(template({
        app,
        ssrData,
        files
      }))
    })
    .catch((error) => {
      console.error(error)
      res.send(`Error: ${error.message}`)
    })
}

const testFile = (reg) => (file) => reg.test(file)

const getFiles = (stats, ...chunks) => chunks.reduce((acc, name) => {
  const assets = stats.assetsByChunkName[name].map((file) => stats.publicPath + file)
  return {
    css: acc.css.concat(assets.filter(testFile(/\.css$/))),
    js: acc.js.concat(assets.filter(testFile(/\.js$/)))
  }
}, { css: [], js: [] })

export default function serverRender ({ clientStats }) {
  const config = require('config')
  const express = require('express')
  const requestLanguage = require('express-request-language')
  const router = express.Router()
  const files = getFiles(clientStats, 'main')

  router.use(requestLanguage({ languages: SUPPORTED_LANGS }))
  router.use(renderAppMiddleware(files, config))

  return router
}
