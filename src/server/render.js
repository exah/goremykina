import config from 'config'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter as Router } from 'react-router'
import { getInitialData } from 'react-universal-data'
import { DEFAULT_LANG } from '../constants'
import template from './template'
import App from '../containers/app'

const render = (files) => (req, res, next) => {
  const userLang = req.language || DEFAULT_LANG

  const context = {
    status: 200,
    statusText: 'OK'
  }

  const helmetContext = {}

  const appElement = (
    <Router location={req.url} context={context}>
      <App userLang={userLang} helmetContext={helmetContext} />
    </Router>
  )

  return getInitialData(appElement)
    .catch((error) => {
      console.log('Prefetch failed')
      console.error(error)

      context.status = error.status || 500
      context.statusText = error.statusText || 'Unknown error'

      if (
        context.status >= 300 &&
        context.status < 400 &&
        error.data.location
      ) {
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

      const html = renderToString(appElement)
      const head = helmetContext.helmet

      const ssr = {
        config: config.public,
        initialData,
        userLang
      }

      res.send(
        template({
          app: { html, head, ssr },
          files
        })
      )
    })
    .catch((error) => {
      next(error)
    })
}

export default render
