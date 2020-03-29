import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from 'react-router'
import { createBrowserHistory } from 'history'
import { hydrateInitialData } from 'react-universal-data'
import App from '../containers/app'

hydrateInitialData(window._ssr.initialData)

// Test & import polyfills, then render app
Promise.all([
  window.PointerEvent == null &&
    import(/* webpackChunkName: 'pointer-events' */ 'pepjs')
]).then(() =>
  ReactDOM.hydrate(
    <Router history={createBrowserHistory()}>
      <App userLang={window._ssr.userLang} />
    </Router>,
    document.getElementById('app')
  )
)
