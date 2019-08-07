import React from 'react'
import { Global, css } from '@emotion/core'
import { useTheme } from 'pss-components'

const AppGlobalStyles = () => {
  const theme = useTheme()

  return (
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
}

export default AppGlobalStyles
