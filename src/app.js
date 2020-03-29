import { hot } from 'react-hot-loader'
import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import { ROUTE_LANG, ROUTE_PAGE } from './constants'
import { Providers } from './components'
import { Pages } from './pages'

const App = ({ userLang, helmetContext }) => (
  <Switch>
    <Route
      path={ROUTE_LANG}
      render={({ match }) => (
        <Providers helmetContext={helmetContext} lang={match.params.lang}>
          <Route path={ROUTE_PAGE} render={() => <Pages />} />
        </Providers>
      )}
    />
    <Redirect from='/' to={'/' + userLang} exact />
  </Switch>
)

export default hot(module)(App)
