import config from 'config'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter as Router } from 'react-router'
import { isResponseError } from 'ya-fetch'
import { getInitialData } from 'react-universal-data'
import { DEFAULT_LANG } from '../constants'
import { Template } from '../components'
import App from '../app'

function handleServerSideRender(files) {
  return async (req, res, next) => {
    const userLang = req.language || DEFAULT_LANG

    const context = {
      status: 200,
      statusText: 'OK'
    }

    const appElement = (
      <Router location={req.url} context={context}>
        <App userLang={userLang} helmetContext={context} />
      </Router>
    )

    try {
      const data = await getInitialData(appElement)
      const html = renderToString(
        <Template
          head={context.helmet}
          files={files}
          ssr={{
            config: config.public,
            initialData: data,
            userLang
          }}
        >
          {appElement}
        </Template>
      )

      if (context.url) {
        res.redirect(302, context.url)
        console.log(`Redirecting... '${req.path}' -> '${context.url}'`)
      } else {
        res.status(context.status)
        res.write('<!DOCTYPE html>')
        res.write(html)
        res.end()
      }
    } catch (error) {
      console.log('Render failed')
      console.error(error)

      const status = isResponseError(error)
        ? error.response.status
        : context.status || 500

      res.status(status)
      next(error)
    }
  }
}

export default handleServerSideRender
