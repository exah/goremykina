import 'defaults.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from 'react-router'
import { createBrowserHistory } from 'history'
import { hydrateData } from 'react-universal-data'
import App from './app'

// Get server state
const { initialData, userLang } = (window._ssr || {})

// Restore withData state
hydrateData(initialData)

// Test & import polyfills, then render app
Promise.all([
  Promise.resolve(window.PointerEvent == null && import(/* webpackChunkName: 'pointer-events' */ 'pepjs'))
]).then(() =>
  ReactDOM.hydrate((
    <Router history={createBrowserHistory()}>
      <App userLang={userLang} />
    </Router>
  ), document.getElementById('app'))
)
