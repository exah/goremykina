import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import { Link, Switch, Route } from 'react-router-dom'
import { Layout, FlexBox } from 'pss-components'
import { Logo } from '../components'
import { withIntl } from '../hocs'

import {
  ROUTE_HOME,
  ROUTE_ABOUT
} from '../constants'

import Home from '../pages/home'
import About from '../pages/about'

const AppLayout = ({ _t, _link, _linkAlt, lang }) => (
  <Fragment>
    <Helmet>
      <html lang={lang} />
      <title>{_t('title')}</title>
    </Helmet>
    <Layout pd bg='site-background'>
      <Layout.Item comp='header'>
        <FlexBox justify>
          <FlexBox.Item>
            <Link to={_link(ROUTE_HOME)}>
              <Logo title={_t('nav.home')} />
            </Link>
          </FlexBox.Item>
          <FlexBox.Item>
            <Link to={_linkAlt(ROUTE_HOME)}>
              {_t('nav.lang')}
            </Link>
          </FlexBox.Item>
        </FlexBox>
      </Layout.Item>
      <Layout.Content comp='main'>
        <Switch>
          <Route path={ROUTE_HOME} exact component={Home} />
          <Route path={ROUTE_ABOUT} component={About} />
        </Switch>
      </Layout.Content>
      <Layout.Item comp='footer'>
        <FlexBox justify>
          <FlexBox.Item>
            <Link to={_link(ROUTE_ABOUT)}>
              {_t('nav.about')}
            </Link>
          </FlexBox.Item>
          <FlexBox.Item>
            [description]
          </FlexBox.Item>
        </FlexBox>
      </Layout.Item>
    </Layout>
  </Fragment>
)

export default withIntl(AppLayout)
