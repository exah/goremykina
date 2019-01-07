import React from 'react'
import { Global, css } from '@emotion/core'
import { withTheme } from 'emotion-theming'

const AppGlobalStyles = ({ theme }) => (
  <Global
    styles={css`
      :root {
        ${theme.textStyle.root.all}

        @media ${theme.media.sm} {
          ${theme.textStyle.root.sm}
        }
      }

      html, body, #app {
        height: 100%;
      }

      body {
        position: fixed;
        overflow: hidden;
        width: 100%;
      }
    `}
  />
)

export default withTheme(AppGlobalStyles)
