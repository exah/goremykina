import config from 'config'
import React from 'react'
import { useRouteMatch } from 'react-router'
import { HelmetProvider } from 'react-helmet-async'
import { MatchMediaProvider, ThemeProvider } from 'pss-components'
import { THEME, ROUTE_LANG } from '../constants'
import { IntlProvider } from '../contexts'
import { GlobalStyles } from '../components'
import { messages } from '../data/intl'

export function Providers({ helmetContext, children }) {
  const match = useRouteMatch(ROUTE_LANG)

  return (
    <IntlProvider
      lang={match ? match.params.lang : null}
      messages={messages}
      baseUrl={config.public.siteUrl}
    >
      <HelmetProvider context={helmetContext}>
        <ThemeProvider theme={THEME}>
          <GlobalStyles />
          <MatchMediaProvider>{children}</MatchMediaProvider>
        </ThemeProvider>
      </HelmetProvider>
    </IntlProvider>
  )
}
