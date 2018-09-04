import React, { Component } from 'react'
import { Flipper } from 'react-flip-toolkit'
import Helmet from 'react-helmet'
import { compose } from 'recompose'
import { withData } from 'react-universal-data'
import { Layout, FlexBox, Text } from 'pss-components'
import { Logo, RouteWithProps } from '../components'
import { getPicturs } from '../api'
import { withIntl } from '../hocs'

import {
  ROUTE_HOME,
  ROUTE_ABOUT
} from '../constants'

import Home from '../pages/home'
import About from '../pages/about'
import AppLink from './app-link'

const FlipperLayoutBody = Layout.Body.withComponent(Flipper)

class AppLayout extends Component {
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
    const { _t, _linkAlt, lang, isLoading, match, pictures } = this.props
    const { activePictureIndex } = this.state
    const activePicture = pictures[activePictureIndex]
    const isAboutPageOpen = match.params.page === 'about'

    return (
      <>
        <Helmet>
          <html lang={lang} />
          <title>{_t('title')}</title>
        </Helmet>
        <Layout bg='site-background' ovh>
          <Layout.Item comp='header' pd={2}>
            <FlexBox justify>
              <FlexBox.Item>
                <AppLink path={ROUTE_HOME}>
                  <Logo title={_t('nav.home')} />
                </AppLink>
              </FlexBox.Item>
              <FlexBox.Item>
                <AppLink to={_linkAlt(ROUTE_HOME)}>
                  <Text>{_t('nav.lang')}</Text>
                </AppLink>
              </FlexBox.Item>
            </FlexBox>
          </Layout.Item>
          <FlipperLayoutBody flipKey={isAboutPageOpen}>
            <RouteWithProps
              path={ROUTE_HOME}
              component={Home}
              pictures={pictures}
              onPictureChange={this.handlePictureChange}
              isAboutPageOpen={isAboutPageOpen}
              activePictureIndex={activePictureIndex}
              exact
            />
            <RouteWithProps
              path={ROUTE_ABOUT}
              component={About}
              isLoading={isLoading}
              activePicture={activePicture}
            />
          </FlipperLayoutBody>
          <Layout.Item comp='footer' pd={2}>
            <FlexBox justify align='flex-end'>
              <FlexBox.Item>
                <AppLink path={ROUTE_ABOUT}>
                  <Text>{_t('nav.about')}</Text>
                </AppLink>
              </FlexBox.Item>
              {activePicture && (
                <FlexBox.Item>
                  <Text align='right'>
                    <Text mgb>
                      {isLoading ? _t('label.loading') : activePicture.name}
                    </Text>
                    <Text textStyle='caption'>
                      {isLoading ? <>&nbsp;</> : activePicture.description}
                    </Text>
                  </Text>
                </FlexBox.Item>
              )}
            </FlexBox>
          </Layout.Item>
        </Layout>
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
)(AppLayout)
