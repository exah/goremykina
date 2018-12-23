import 'defaults.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
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
    <Router>
      <App userLang={userLang} />
    </Router>
  ), document.getElementById('app'))
)
