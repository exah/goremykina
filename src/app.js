import React from 'react'
import { hot } from 'react-hot-loader'
import { injectGlobal } from 'emotion'
import { ThemeProvider } from 'emotion-theming'
import { Switch, Route, Redirect, Link } from 'react-router-dom'
import { createTheme } from '@exah/prop-styles-system'
import { Layout, Logo, FlexBox } from './components'
import { THEME } from './constants'
import Home from './pages/home'
import About from './pages/about'

injectGlobal({
  'html, body, #app': {
    height: '100%'
  }
})

const App = ({ userLang }) => (
  <ThemeProvider theme={createTheme(THEME)}>
    <Switch>
      <Route path='/:lang(ru|en)'>
        {({ match }) => (
          <Layout>
            <Layout.Header>
              <FlexBox justify>
                <FlexBox.Item>
                  <Link to={match.url}>
                    <Logo title='Irina Goremykina' />
                  </Link>
                </FlexBox.Item>
                <FlexBox.Item>
                  [lang]
                </FlexBox.Item>
              </FlexBox>
            </Layout.Header>
            <Layout.Content>
              <Switch>
                <Route path={match.path} exact component={Home} />
                <Route path={match.path + '/about'} component={About} />
              </Switch>
            </Layout.Content>
            <Layout.Footer>
              <FlexBox justify>
                <FlexBox.Item>
                  <Link to={match.url + '/about'}>
                    About Irina
                  </Link>
                </FlexBox.Item>
                <FlexBox.Item>
                  [description]
                </FlexBox.Item>
              </FlexBox>
            </Layout.Footer>
          </Layout>
        )}
      </Route>
      <Redirect from='/' to={'/' + userLang} exact />
    </Switch>
  </ThemeProvider>
)

export default hot(module)(App)
