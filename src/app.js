import React from 'react'
import { hot } from 'react-hot-loader'
import { injectGlobal } from 'emotion'
import { ThemeProvider } from 'emotion-theming'
import { createTheme } from '@exah/prop-styles-system'
import { Layout, Logo, FlexBox } from './components'
import { THEME } from './constants'

injectGlobal({
  'html, body, #app': {
    height: '100%'
  }
})

const App = () => (
  <ThemeProvider theme={createTheme(THEME)}>
    <Layout>
      <Layout.Header>
        <FlexBox justify>
          <FlexBox.Item>
            <Logo title='Irina Goremykina' />
          </FlexBox.Item>
          <FlexBox.Item>
            [lang]
          </FlexBox.Item>
        </FlexBox>
      </Layout.Header>
      <Layout.Content>
        Content
      </Layout.Content>
      <Layout.Footer>
        <FlexBox justify>
          <FlexBox.Item>
            About Irina
          </FlexBox.Item>
          <FlexBox.Item>
            [description]
          </FlexBox.Item>
        </FlexBox>
      </Layout.Footer>
    </Layout>
  </ThemeProvider>
)

export default hot(module)(App)
