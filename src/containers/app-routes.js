import React, { PureComponent } from 'react'
import Helmet from 'react-helmet'
import { compose } from '@exah/utils'
import { Flipper } from 'react-flip-toolkit'
import { Switch, Redirect } from 'react-router'
import { Box } from 'pss-components'
import { RouteWithProps } from '../components'
import { withIntl, withPicturesData } from '../hocs'
import PicturePage from '../pages/picture'
import PictureZoomPage from '../pages/picture-zoom'
import AboutPage from '../pages/about'

import {
  ROUTE_LANG,
  ROUTE_PICTURE,
  ROUTE_PICTURE_ZOOM,
  ROUTE_ABOUT
} from '../constants'

const FlipperBox = Box.withComponent(Flipper)

class AppRoutes extends PureComponent {
  static defaultProps = {
    match: { params: {} },
    activePicture: null,
    pictures: []
  }

  static getDerivedStateFromProps ({ pictures, match }) {
    if (match.params.slug == null) {
      return null
    }

    return {
      activePicture: pictures.find((p) => p.slug === match.params.slug)
    }
  }

  state = {
    activePicture: this.props.activePicture
  }

  render () {
    const { intl, match, isLoading, pictures } = this.props
    const { activePicture } = this.state
    const style = activePicture ? { backgroundColor: activePicture.color } : {}

    return (
      <>
        <Helmet
          defaultTitle={intl.t('title').toString()}
          titleTemplate={'%s — ' + intl.t('title')}
        >
          <html lang={intl.lang} />
          <link rel='icon' sizes='192x192' href='/icon.png' />
          <link rel='apple-touch-icon' href='/apple-icon.png' />
          {activePicture && (<meta name='theme-color' content={activePicture.color} />)}
        </Helmet>
        <Box tm height={1} transition='background-color .5s' style={style}>
          <FlipperBox flipKey={match.params.page} height>
            <Switch>
              <RouteWithProps
                path={ROUTE_PICTURE}
                component={PicturePage}
                pictures={pictures}
                activePicture={activePicture}
                isLoading={isLoading}
                exact
              />
              <Redirect from={ROUTE_LANG} to={intl.link(ROUTE_PICTURE)} exact />
            </Switch>
            <RouteWithProps
              path={ROUTE_PICTURE_ZOOM}
              component={PictureZoomPage}
              activePicture={activePicture}
              isLoading={isLoading}
            />
            <RouteWithProps
              path={ROUTE_ABOUT}
              component={AboutPage}
              activePicture={activePicture}
              isLoading={isLoading}
            />
          </FlipperBox>
        </Box>
      </>
    )
  }
}

export default compose(
  withIntl,
  withPicturesData
)(AppRoutes)
