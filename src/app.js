import config from 'config'
import { hot } from 'react-hot-loader'
import React, { Component } from 'react'
import { Global, css } from '@emotion/core'
import { ThemeProvider } from 'emotion-theming'
import { CurrentMediaProvider } from 'pss-components'
import { IntlProvider } from './contexts'

import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

import {
  THEME,
  ALT_LANG,
  ROUTE_LANG,
  ROUTE_PAGE
} from './constants'

import { messages } from './data/intl'
import { AppRoutes } from './containers'

const AppGlobalStyles = () => (
  <Global
    styles={css`
      :root {
        ${THEME.textStyle.root}
      }

      html, body, #app {
        height: 100%;
        height: 100%;
      }

      html {
        position: fixed;
        width: 100%;
        overflow: hidden;
      }
    `}
  />
)

class App extends Component {
  render () {
    const { userLang } = this.props

    return (
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
                    langAlt={ALT_LANG[match.params.lang]}
                    messages={messages}
                    siteUrl={config.public.siteUrl}
                  >
                    <Route path={ROUTE_PAGE} render={(data) => (
                      <AppRoutes {...data} />
                    )} />
                  </IntlProvider>
                )}
              />
              <Redirect from='/' to={'/' + userLang} exact />
            </Switch>
          </CurrentMediaProvider>
        </>
      </ThemeProvider>
    )
  }
}

export default hot(module)(App)
