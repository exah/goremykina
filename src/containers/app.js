import { hot } from 'react-hot-loader'
import config from 'config'
import React from 'react'
import { HelmetProvider } from 'react-helmet-async'
import { MatchMediaProvider, ThemeProvider } from 'pss-components'
import { Switch, Route, Redirect } from 'react-router'
import { THEME, ALT_LANG, ROUTE_LANG, ROUTE_PAGE } from '../constants'
import { IntlProvider } from '../contexts'
import { GlobalStyles } from '../components'
import { messages } from '../data/intl'
import AppRoot from './app-root'

const App = ({ userLang, helmetContext }) => (
  <HelmetProvider context={helmetContext}>
    <ThemeProvider theme={THEME}>
      <>
        <GlobalStyles />
        <MatchMediaProvider>
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
                    render={(data) => <AppRoot {...data} />}
                  />
                </IntlProvider>
              )}
            />
            <Redirect from='/' to={'/' + userLang} exact />
          </Switch>
        </MatchMediaProvider>
      </>
    </ThemeProvider>
  </HelmetProvider>
)

export default hot(module)(App)
