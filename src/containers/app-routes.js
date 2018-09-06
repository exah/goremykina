import React, { Component } from 'react'
import { Flipper } from 'react-flip-toolkit'
import Helmet from 'react-helmet'
import { compose } from 'recompose'
import { withData } from 'react-universal-data'
import { Box } from 'pss-components'
import { RouteWithProps } from '../components'
import { getPicturs } from '../api'
import { withIntl } from '../hocs'

import {
  ROUTE_HOME,
  ROUTE_ABOUT
} from '../constants'

import Home from '../pages/home'
import About from '../pages/about'

const FlipperBox = Box.withComponent(Flipper)

class AppRoutes extends Component {
  static defaultProps = {
    pictures: []
  }
  state = {
    activePictureIndex: 0
  }
  handlePictureChange = ({ currentViewIndex }) => {
    this.setState({
      activePictureIndex: currentViewIndex
    })
  }
  render () {
    const { _t, lang, isLoading, match, pictures } = this.props
    const { activePictureIndex } = this.state
    const activePicture = pictures[activePictureIndex]

    return (
      <>
        <Helmet>
          <html lang={lang} />
          <title>{_t('title')}</title>
        </Helmet>
        <FlipperBox flipKey={match.params.page} bg='site-background' ht>
          <RouteWithProps
            path={ROUTE_HOME}
            component={Home}
            pictures={pictures}
            onPictureChange={this.handlePictureChange}
            activePictureIndex={activePictureIndex}
            activePicture={activePicture}
            exact
          />
          <RouteWithProps
            path={ROUTE_ABOUT}
            component={About}
            isLoading={isLoading}
            activePicture={activePicture}
          />
        </FlipperBox>
      </>
    )
  }
}

export default compose(
  withData(
    ({ match }) => getPicturs(match.params).then((res) => ({
      pictures: res.data
    })),
    (prev, next) =>
      prev.match.params.lang !== next.match.params.lang
  ),
  withIntl
)(AppRoutes)
