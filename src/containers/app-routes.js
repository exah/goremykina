import React, { PureComponent } from 'react'
import Helmet from 'react-helmet'
import { compose } from 'recompose'
import { Flipper } from 'react-flip-toolkit'
import { Switch, Redirect } from 'react-router-dom'
import { Box } from 'pss-components'
import { RouteWithProps } from '../components'
import { withIntl, withPicturesDataState } from '../hocs'
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
    pictures: []
  }

  render () {
    const { intl, match, isLoading, pictures, activePicture } = this.props
    const style = activePicture ? { backgroundColor: activePicture.color } : {}

    return (
      <>
        <Helmet
          defaultTitle={intl.t('title')}
          titleTemplate={'%s — ' + intl.t('title')}
        >
          <html lang={intl.lang} />
        </Helmet>
        <Box tm ht transition='background-color .5s' style={style}>
          <FlipperBox flipKey={match.params.page} ht>
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
  withPicturesDataState
)(AppRoutes)
