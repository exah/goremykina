import config from 'config'
import { hot } from 'react-hot-loader'
import React from 'react'
import { ThemeProvider } from 'emotion-theming'
import { CurrentMediaProvider } from 'pss-components'
import { Switch, Route, Redirect } from 'react-router'
import { THEME, ALT_LANG, ROUTE_LANG, ROUTE_PAGE } from '../constants'
import { IntlProvider } from '../contexts'
import { messages } from '../data/intl'
import AppGlobalStyles from './app-global-styles'
import AppRoutes from './app-routes'

const App = ({ userLang }) => (
  <ThemeProvider theme={THEME}>
    <>
      <AppGlobalStyles />
      <CurrentMediaProvider>
        <Switch>
          <Route
            path={ROUTE_LANG}
            render={({ match }) => (
              <IntlProvider
                lang={match.params.lang}
                messages={messages}
                baseUrl={config.public.siteUrl}
                langAlt={ALT_LANG[match.params.lang]}
              >
                <Route
                  path={ROUTE_PAGE}
                  render={(data) => <AppRoutes {...data} />}
                />
              </IntlProvider>
            )}
          />
          <Redirect from='/' to={'/' + userLang} exact />
        </Switch>
      </CurrentMediaProvider>
    </>
  </ThemeProvider>
)

export default hot(module)(App)
