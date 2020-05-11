import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import { ROUTE_PAGE } from './constants'
import { Providers } from './components'
import { Pages } from './pages'

const App = ({ userLang, helmetContext }) => (
  <Providers helmetContext={helmetContext}>
    <Switch>
      <Route path={ROUTE_PAGE}>
        <Pages />
      </Route>
      <Redirect from='/' to={'/' + userLang} exact />
    </Switch>
  </Providers>
)

export default App
