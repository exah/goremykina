import 'defaults.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './app'
import { hydrate } from 'emotion'
import { dataStore } from './hocs/with-data'

// Get server state
const { cssIds, initialData } = (window._ssr || {})

// Restore emotion css ids and withData state
hydrate(cssIds)
dataStore.init(initialData)

// Render app
ReactDOM.hydrate((
  <Router>
    <App />
  </Router>
), document.getElementById('app'))
