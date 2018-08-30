import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import { Switch, Route } from 'react-router-dom'
import { Layout, FlexBox, Text } from 'pss-components'
import { Logo } from '../components'
import { withIntl } from '../hocs'

import {
  ROUTE_HOME,
  ROUTE_PICTURE,
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
      <Layout.Content comp='main'>
        <Switch>
          <Route path={ROUTE_PICTURE} component={Home} />
          <Route path={ROUTE_HOME} component={Home} />
        </Switch>
        <Route path={ROUTE_ABOUT} component={About} />
      </Layout.Content>
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
