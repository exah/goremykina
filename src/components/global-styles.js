import React from 'react'
import { Global, css } from '@emotion/core'
import { useTheme } from 'pss-components'

export function GlobalStyles() {
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

        html, body {
          margin: 0;
          padding: 0;
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
