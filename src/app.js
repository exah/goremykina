import React from 'react'
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

injectGlobal({
  'html, body, #app': {
    height: '100%'
  }
})

addLocaleData([
  ...en,
  ...ru
])

const App = ({ userLang }) => (
  <ThemeProvider theme={createTheme(THEME)}>
    <Switch>
      <Route path={ROUTE_LANG}>
        {({ match }) => (
          <IntlProvider
            defaultLocale={DEFAULT_LANG}
            locale={match.params.lang}
            messages={messages[match.params.lang]}
          >
            <AppLayout />
          </IntlProvider>
        )}
      </Route>
      <Redirect from='/' to={'/' + userLang} exact />
    </Switch>
  </ThemeProvider>
)

export default hot(module)(App)
