import 'intl'
import 'defaults.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './app'
import { hydrate } from 'emotion'
import { DataProvider, createDataStore } from './hocs/with-data'

// Get server state
const { cssIds, initialData, userLang } = (window._ssr || {})

// Restore emotion css ids and withData state
hydrate(cssIds)

// Render app
ReactDOM.hydrate((
  <DataProvider value={createDataStore(initialData)}>
    <Router>
      <App userLang={userLang} />
    </Router>
  </DataProvider>
), document.getElementById('app'))
