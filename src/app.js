import config from 'config'
import { hot } from 'react-hot-loader'
import React, { Component } from 'react'
import { injectGlobal } from 'emotion'
import { ThemeProvider } from 'emotion-theming'
import { createTheme } from 'pss'
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

const theme = createTheme(THEME)

class App extends Component {
  constructor (props) {
    super(props)

    injectGlobal({
      'html': {
        position: 'fixed',
        width: '100%',
        height: '100%',
        overflow: 'hidden'
      },
      'body, #app': {
        height: '100%'
      },
      ':root': theme.textStyle.root
    })
  }
  render () {
    const { userLang } = this.props

    return (
      <ThemeProvider theme={theme}>
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
      </ThemeProvider>
    )
  }
}

export default hot(module)(App)
