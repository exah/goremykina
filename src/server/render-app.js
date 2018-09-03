import config from 'config'
import React from 'react'
import { Helmet } from 'react-helmet'
import { extractCritical } from 'emotion-server'
import { renderToString } from 'react-dom/server'
import { StaticRouter as Router } from 'react-router'
import { getInitialData } from 'react-universal-data'
import { DEFAULT_LANG } from '../constants'
import template from '../template'
import App from '../app'

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

const renderAppMiddleware = (files) => (req, res, next) => {
  const userLang = req.language || DEFAULT_LANG

  const context = {
    status: 200,
    statusText: 'OK'
  }

  const appElement = (
    <Router location={req.url} context={context}>
      <App userLang={userLang} />
    </Router>
  )

  return getInitialData(appElement)
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

      const app = renderApp(appElement)

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
      next(error)
    })
}

export default renderAppMiddleware
