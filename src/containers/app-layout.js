import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import { Layout, FlexBox, Text } from 'pss-components'
import { Logo, RouteWithProps } from '../components'
import { withIntl } from '../hocs'

import {
  ROUTE_HOME,
  ROUTE_ABOUT
} from '../constants'

import Home from '../pages/home'
import About from '../pages/about'
import AppLink from './app-link'

const AppLayout = ({ _t, _linkAlt, lang }) => (
  <Fragment>
    <Helmet>
      <html lang={lang} />
      <title>{_t('title')}</title>
    </Helmet>
    <Layout pd bg='site-background'>
      <Layout.Item comp='header'>
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
        <RouteWithProps path={ROUTE_HOME} component={Home} exact>
          {(state) => (
            <RouteWithProps path={ROUTE_ABOUT} component={About} {...state} />
          )}
        </RouteWithProps>
      </Layout.Body>
      <Layout.Item comp='footer'>
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
  </Fragment>
)

export default withIntl(AppLayout)
