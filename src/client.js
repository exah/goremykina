import 'intl'
import 'defaults.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { hydrateData } from 'react-universal-data'
import { hydrate as hydrateCSS } from 'emotion'
import App from './app'

// Get server state
const { cssIds, initialData, userLang } = (window._ssr || {})

// Restore emotion css ids and withData state
hydrateCSS(cssIds)
hydrateData(initialData)

// Render app
ReactDOM.hydrate((
  <Router>
    <App userLang={userLang} />
  </Router>
), document.getElementById('app'))
