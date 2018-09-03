import React, { Component } from 'react'
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

class AppLayout extends Component {
  static defaultProps = {
    pictures: []
  }
  state = {
    activePicture: null
  }
  render () {
    const { _t, _linkAlt, lang, isLoading, pictures } = this.props

    return (
      <>
        <Helmet>
          <html lang={lang} />
          <title>{_t('title')}</title>
        </Helmet>
        <Layout bg='site-background'>
          <Layout.Item comp='header' pd>
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
          <Layout.Body comp='main'>
            <RouteWithProps
              path={ROUTE_HOME}
              component={Home}
              isLoading={isLoading}
              pictures={pictures}
              exact
            />
            <RouteWithProps
              path={ROUTE_ABOUT}
              component={About}
              isLoading={isLoading}
            />
          </Layout.Body>
          <Layout.Item comp='footer' pd>
            <FlexBox justify>
              <FlexBox.Item>
                <AppLink path={ROUTE_ABOUT}>
                  <Text>{_t('nav.about')}</Text>
                </AppLink>
              </FlexBox.Item>
              <FlexBox.Item>
                <Text>[description]</Text>
              </FlexBox.Item>
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
