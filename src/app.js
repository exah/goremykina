import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import { injectGlobal } from 'emotion'
import { ThemeProvider } from 'emotion-theming'
import { createTheme } from 'pss'
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
  ROUTE_LANG
} from './constants'

import { messages } from './data/intl'
import { AppLayout } from './containers'

const theme = createTheme(THEME)

addLocaleData([
  ...en,
  ...ru
])

class App extends Component {
  constructor (props) {
    super(props)

    injectGlobal({
      'html, body, #app': {
        height: '100%'
      },
      ':root': theme.textStyle.root
    })
  }
  render () {
    const { userLang } = this.props

    return (
      <ThemeProvider theme={theme}>
        <Switch>
          <Route path={ROUTE_LANG}>
            {(props) => (
              <IntlProvider
                defaultLocale={DEFAULT_LANG}
                locale={props.match.params.lang}
                messages={messages[props.match.params.lang]}
              >
                <AppLayout {...props} />
              </IntlProvider>
            )}
          </Route>
          <Redirect from='/' to={'/' + userLang} exact />
        </Switch>
      </ThemeProvider>
    )
  }
}

export default hot(module)(App)
