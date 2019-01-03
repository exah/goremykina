import React from 'react'
import { Switch, Redirect } from 'react-router'
import { RouteWithProps } from '../components'
import { withIntl } from '../hocs'
import PicturePage from '../pages/picture'
import PictureZoomPage from '../pages/picture-zoom'
import AboutPage from '../pages/about'

import {
  ROUTE_LANG,
  ROUTE_PICTURE,
  ROUTE_PICTURE_ZOOM,
  ROUTE_ABOUT
} from '../constants'

const AppRoutes = ({ intl, isLoading, pictures, activePicture }) => (
  <>
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
  </>
)

export default withIntl(AppRoutes)
