import React, { Component } from 'react'
import { Flipper } from 'react-flip-toolkit'
import { Switch, Redirect } from 'react-router'
import Helmet from 'react-helmet'
import { compose } from 'recompose'
import { withData } from 'react-universal-data'
import { Box } from 'pss-components'
import { RouteWithProps } from '../components'
import { getPicturs } from '../api'
import { withIntl } from '../hocs'

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

const isPictureUpdated = (prev, next) => (prev != null && next != null && prev.id !== next.id)

class AppRoutes extends Component {
  static defaultProps = {
    pictures: []
  }
  constructor (props) {
    super(props)

    this.state = {
      activePictureIndex: 0,
      activePicture: props.pictures[0]
    }

    if (props.match.params.slug != null && props.pictures.length > 0) {
      const activePictureIndex = props.pictures.findIndex((p) => p.slug === props.match.params.slug)

      if (activePictureIndex === -1) return

      this.state = {
        activePictureIndex,
        activePicture: props.pictures[activePictureIndex]
      }
    }
  }
  handlePictureChange = ({ currentViewIndex }) => {
    this.setState((state, props) => {
      if (state.activePictureIndex !== currentViewIndex) {
        return {
          activePictureIndex: currentViewIndex,
          activePicture: props.pictures[currentViewIndex]
        }
      }
    })
  }
  componentDidUpdate (prevProps, prevState) {
    const { _link, history } = this.props
    const { activePicture } = this.state

    if (isPictureUpdated(prevState.activePicture, activePicture)) {
      history.replace(_link(ROUTE_PICTURE, activePicture))
    }
  }
  render () {
    const { _t, _link, lang, isLoading, match, pictures } = this.props
    const { activePictureIndex, activePicture } = this.state
    const style = activePicture ? { backgroundColor: activePicture.color } : {}

    return (
      <>
        <Helmet>
          <html lang={lang} />
          <title>{_t('title')}</title>
        </Helmet>
        <FlipperBox flipKey={match.params.page} ht>
          <Box tm ht transition='all .5s' style={style}>
            <Switch>
              <RouteWithProps
                path={ROUTE_PICTURE}
                component={PicturePage}
                pictures={pictures}
                onPictureChange={this.handlePictureChange}
                activePictureIndex={activePictureIndex}
                activePicture={activePicture}
                isLoading={isLoading}
                exact
              />
              <RouteWithProps
                path={ROUTE_PICTURE_ZOOM}
                component={PictureZoomPage}
                activePicture={activePicture}
                isLoading={isLoading}
              />
              <RouteWithProps
                path={ROUTE_ABOUT}
                component={AboutPage}
                isLoading={isLoading}
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
  withData(
    ({ match }) => getPicturs(match.params).then((res) => ({
      pictures: res.data
    })),
    (prev, next) => prev.lang !== next.lang
  )
)(AppRoutes)
