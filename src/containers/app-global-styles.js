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
        height: 100%;
      }

      html {
        position: fixed;
        width: 100%;
        overflow: hidden;
      }
    `}
  />
)

export default withTheme(AppGlobalStyles)
