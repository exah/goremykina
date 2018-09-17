import React, { PureComponent } from 'react'
import Helmet from 'react-helmet'
import { compose } from 'recompose'
import { Flipper } from 'react-flip-toolkit'
import { Switch, Redirect } from 'react-router'
import { Box } from 'pss-components'
import { RouteWithProps } from '../components'
import { withIntl, withPicturesDataState } from '../hocs'

import {
  ROUTE_LANG,
  ROUTE_PICTURE,
  ROUTE_PICTURE_ZOOM,
  ROUTE_ABOUT
} from '../constants'

import PicturePage from '../pages/picture'
import PictureZoomPage from '../pages/picture-zoom'
import AboutPage from '../pages/about'

const FlipperBox = Box.withComponent(Flipper)

class AppRoutes extends PureComponent {
  static defaultProps = {
    pictures: []
  }

  render () {
    const { _t, _link, lang, page, pictures, activePicture, changeActivePicture } = this.props
    const style = activePicture ? { backgroundColor: activePicture.color } : {}

    return (
      <>
        <Helmet>
          <html lang={lang} />
          <title>{_t('title')}</title>
        </Helmet>
        <FlipperBox flipKey={page} ht>
          <Box tm ht transition='all .5s' style={style}>
            <Switch>
              <RouteWithProps
                path={ROUTE_PICTURE}
                component={PicturePage}
                onPictureChange={changeActivePicture}
                pictures={pictures}
                activePicture={activePicture}
                exact
              />
              <RouteWithProps
                path={ROUTE_PICTURE_ZOOM}
                component={PictureZoomPage}
                activePicture={activePicture}
              />
              <RouteWithProps
                path={ROUTE_ABOUT}
                component={AboutPage}
                activePicture={activePicture}
              />
              <Redirect from={ROUTE_LANG} to={_link(ROUTE_PICTURE)} exact />
            </Switch>
          </Box>
        </FlipperBox>
      </>
    )
  }
}

export default compose(
  withIntl,
  withPicturesDataState
)(AppRoutes)
