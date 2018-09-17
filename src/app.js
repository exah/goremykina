import { hot } from 'react-hot-loader'
import React, { Component } from 'react'
import { injectGlobal } from 'emotion'
import { ThemeProvider } from 'emotion-theming'
import { createTheme } from 'pss'
import { CurrentMediaProvider } from 'pss-components'
import en from 'react-intl/locale-data/en'
import ru from 'react-intl/locale-data/ru'

import {
  addLocaleData,
  IntlProvider
} from 'react-intl'

import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

import {
  THEME,
  DEFAULT_LANG,
  ROUTE_LANG,
  ROUTE_PAGE
} from './constants'

import { messages } from './data/intl'
import { AppRoutes } from './containers'

const theme = createTheme(THEME)

addLocaleData([
  ...en,
  ...ru
])

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
                  defaultLocale={DEFAULT_LANG}
                  locale={match.params.lang}
                  messages={messages[match.params.lang]}
                >
                  <Route path={ROUTE_PAGE} render={(data) => (
                    <AppRoutes {...data.match.params} />
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
