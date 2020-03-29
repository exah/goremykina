import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { useHistory } from 'react-router'
import { Flipped } from 'react-flip-toolkit'
import { Helmet } from 'react-helmet-async'
import { useIntl } from '../hooks'
import {
  Box,
  Text,
  Flex,
  Image,
  Pan,
  IconClose,
  RouteLink,
  Description
} from '../components'
import { ROUTE_MAIN } from '../constants'

const Overlay = styled(Box)`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  height: 100%;
  pointer-events: none;
`

// Restore pointer-events inside
const OverlayItem = styled('span')`
  pointer-events: auto;
`

const vmax = (num) => num * 100 + 'vmax'

const ZoomedImage = styled(Image)`
  position: absolute;
  z-index: 0;
  max-width: none;

  ${(p) => {
    const ratio = p.width / p.height

    return p.width > p.height
      ? css`
          top: 50%;
          left: 50%;
          margin-top: -50vmax;
          margin-left: -${vmax(ratio / 2)};
          width: ${vmax(ratio)};
          height: 100vmax;
        `
      : css`
          top: 50%;
          left: 50%;
          margin-top: -${vmax(1 / ratio / 2)};
          margin-left: -50vmax;
          width: 100vmax;
          height: ${vmax(1 / ratio)};
        `
  }}
`

function PicturePage({ activePicture: picture }) {
  const intl = useIntl()
  const history = useHistory()

  const [isReady, setReady] = useState(history.action === 'POP')
  const [isAppeared, setAppeared] = useState(history.action === 'POP')

  useEffect(() => {
    if (isReady) return

    const image = new window.Image(picture.zoomed.width, picture.zoomed.height)

    image.src = picture.zoomed.url
    image.onload = () => {
      setReady(true)
      document.body.removeChild(image)
    }

    // Firefox requires image to be in the DOM
    document.body.appendChild(image)
  }, [isReady, picture])

  return (
    <>
      {picture && (
        <Helmet>
          <title>{picture.name}</title>
          <link rel='canonical' href={intl.href(ROUTE_MAIN, picture)} />
        </Helmet>
      )}
      <Box tm='zoomed' overflow='hidden'>
        {picture && picture.zoomed && (
          <>
            <Overlay width={{ sm: '100%' }} height='100%'>
              <Text textAlign={{ all: 'right', sm: 'center' }} height='100%'>
                <Flex flexDirection='column' height='100%'>
                  <Box>
                    <OverlayItem>
                      <RouteLink
                        path={ROUTE_MAIN}
                        data={picture}
                        title={intl.t('ui.close')}
                      >
                        <Box p={2}>
                          <IconClose ml='auto' />
                        </Box>
                      </RouteLink>
                    </OverlayItem>
                  </Box>
                  <Box mt='auto' p={2}>
                    <OverlayItem>
                      <RouteLink path={ROUTE_MAIN} data={picture}>
                        <Description {...picture} />
                      </RouteLink>
                    </OverlayItem>
                  </Box>
                </Flex>
              </Text>
            </Overlay>
            <Pan>
              <Flipped
                flipId={'pic-' + picture.id}
                onComplete={() => setAppeared(true)}
              >
                <ZoomedImage
                  src={
                    isReady && isAppeared
                      ? picture.zoomed.url
                      : picture.original.url
                  }
                  width={picture.zoomed.width}
                  height={picture.zoomed.height}
                  alt=''
                />
              </Flipped>
            </Pan>
          </>
        )}
      </Box>
    </>
  )
}

export default PicturePage
