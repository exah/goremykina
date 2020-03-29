import config from 'config'
import React from 'react'
import { HelmetProvider } from 'react-helmet-async'
import { MatchMediaProvider, ThemeProvider } from 'pss-components'
import { ALT_LANG, THEME } from '../constants'
import { IntlProvider } from '../contexts'
import { GlobalStyles } from '../components'
import { messages } from '../data/intl'

export const Providers = ({ helmetContext, lang, children }) => (
  <HelmetProvider context={helmetContext}>
    <ThemeProvider theme={THEME}>
      <GlobalStyles />
      <MatchMediaProvider>
        <IntlProvider
          lang={lang}
          messages={messages}
          baseUrl={config.public.siteUrl}
          langAlt={ALT_LANG[lang]}
        >
          {children}
        </IntlProvider>
      </MatchMediaProvider>
    </ThemeProvider>
  </HelmetProvider>
)
