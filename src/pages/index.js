import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Switch, Redirect, useParams } from 'react-router'
import { Flipper } from 'react-flip-toolkit'
import { Box, RouteWithProps } from '../components'
import { useIntl, useFetchPictures } from '../hooks'
import {
  ROUTE_LANG,
  ROUTE_MAIN,
  ROUTE_PICTURE,
  ROUTE_ABOUT
} from '../constants'

import MainPage from './main'
import PicturePage from './picture'
import AboutPage from './about'

export function Pages() {
  const intl = useIntl()
  const { slug, page } = useParams()
  const { result = [], isReady } = useFetchPictures()
  const [activePicture, setActivePicture] = useState(result[0])

  useEffect(() => {
    if (slug == null) return

    setActivePicture(result.find((picture) => picture.slug === slug))
  }, [slug, result])

  return (
    <Box
      tm
      height='100%'
      transition='background-color .5s'
      style={activePicture ? { backgroundColor: activePicture.color } : null}
    >
      <Helmet
        defaultTitle={intl.t('title').toString()}
        titleTemplate={'%s — ' + intl.t('title')}
      >
        <html lang={intl.lang} />
        <meta property='og:site_name' content={intl.t('title')} />
        <link rel='icon' sizes='192x192' href='/icon.png' />
        <link rel='apple-touch-icon' href='/apple-icon.png' />
        {activePicture && (
          <meta name='theme-color' content={activePicture.color} />
        )}
      </Helmet>
      <Box as={Flipper} flipKey={page} height='100%'>
        <Switch>
          <RouteWithProps
            path={ROUTE_MAIN}
            component={MainPage}
            pictures={result}
            activePicture={activePicture}
            isLoading={!isReady}
            exact
          />
          <Redirect from={ROUTE_LANG} to={intl.link(ROUTE_MAIN)} exact />
        </Switch>
        <RouteWithProps
          path={ROUTE_PICTURE}
          component={PicturePage}
          activePicture={activePicture}
          isLoading={!isReady}
        />
        <RouteWithProps
          path={ROUTE_ABOUT}
          component={AboutPage}
          activePicture={activePicture}
          isLoading={!isReady}
        />
      </Box>
    </Box>
  )
}
