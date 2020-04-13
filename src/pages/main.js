import styled from '@emotion/styled'
import React, { useMemo, useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { useHistory } from 'react-router'
import { Flipped } from 'react-flip-toolkit'
import { mq } from 'pss'
import { ALT_LANG, ROUTE_MAIN, ROUTE_PICTURE, ROUTE_ABOUT } from '../constants'
import { useIntl } from '../hooks'
import { join } from '../utils'
import {
  Layout,
  Box,
  Flex,
  Text,
  Image,
  Logo,
  Slideshow,
  RouteLink,
  Description
} from '../components'

const PictureImage = styled(Image)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  max-height: 85%;
  max-width: 90%;
  width: auto;
  height: auto;
  margin: auto;

  ${mq('sm')} {
    max-width: 100%;
  }
`

function MainPage({ pictures, activePicture, isLoading }) {
  const intl = useIntl()
  const history = useHistory()

  const startIndex = useMemo(
    () =>
      activePicture != null
        ? pictures.findIndex((p) => p.slug === activePicture.slug)
        : 0,
    [pictures] // <- I intentionally do not include `activePicture` here
  )

  const [index, setIndex] = useState(startIndex)

  useEffect(() => {
    history.replace(intl.link(ROUTE_MAIN, pictures[index]))
  }, [pictures, index])

  const first = pictures[0]
  const prev = pictures[index - 1]
  const next = pictures[index + 1]
  const last = pictures[pictures.length - 1]

  const canonicalUrl = intl.href(ROUTE_MAIN, activePicture)

  return (
    <>
      {activePicture && (
        <Helmet>
          <title>{activePicture.name}</title>
          <meta property='og:url' content={canonicalUrl} />
          <meta property='og:title' content={activePicture.name} />
          <meta
            property='og:description'
            content={join(
              activePicture.material,
              activePicture.size,
              activePicture.year
            )}
          />
          <meta
            property='og:image'
            content={intl.href(activePicture.original.url)}
          />
          <meta
            property='og:image:width'
            content={activePicture.original.width}
          />
          <meta
            property='og:image:height'
            content={activePicture.original.height}
          />
          <link rel='canonical' href={canonicalUrl} />
          <link rel='alternate' href={canonicalUrl} hrefLang='x-default' />
          <link
            rel='alternate'
            href={intl.href(ROUTE_MAIN, activePicture, ALT_LANG[intl.lang])}
            hrefLang={ALT_LANG[intl.lang]}
          />
          {first && <link rel='first' href={intl.href(ROUTE_MAIN, first)} />}
          {last && <link rel='last' href={intl.href(ROUTE_MAIN, last)} />}
          {prev && <link rel='prev' href={intl.href(ROUTE_MAIN, prev)} />}
          {next && <link rel='next' href={intl.href(ROUTE_MAIN, next)} />}
        </Helmet>
      )}
      <Layout flexDirection='column' minHeight='100%' overflow='hidden'>
        <Box as='header' p={2}>
          <Flex alignItems={{ sm: 'center' }}>
            <Box mr='auto' width={1 / 3} hide='md'>
              <RouteLink path={ROUTE_ABOUT}>
                <Text>{intl.t('nav.about')}</Text>
              </RouteLink>
            </Box>
            <Box>
              <RouteLink path={ROUTE_MAIN} data={activePicture}>
                <Logo title={intl.t('nav.home')} />
              </RouteLink>
            </Box>
            <Box ml='auto' width={1 / 3}>
              <RouteLink path={ROUTE_MAIN} data={activePicture} alternate>
                <Text textAlign='right'>{intl.t('nav.lang')}</Text>
              </RouteLink>
            </Box>
          </Flex>
        </Box>
        <Layout.Content as='main' position='relative'>
          <Slideshow startIndex={startIndex} onChange={setIndex}>
            {pictures.map((picture) => (
              <RouteLink
                key={picture.slug}
                path={ROUTE_PICTURE}
                data={picture}
                disable={!picture.zoomed}
                style={{ cursor: picture.zoomed ? 'zoom-in' : 'auto' }}
              >
                <Flipped flipId={'pic-' + picture.id}>
                  <PictureImage src={picture.original.url} alt={picture.name} />
                </Flipped>
              </RouteLink>
            ))}
          </Slideshow>
        </Layout.Content>
        <Box as='footer' p={2}>
          <Flex justifyContent='space-between' alignItems='flex-end'>
            <Box hide='sm'>
              <RouteLink path={ROUTE_ABOUT}>
                <Text>{intl.t('nav.about')}</Text>
              </RouteLink>
            </Box>
            {activePicture && (
              <Box mx={{ sm: 'auto' }}>
                <Description isLoading={isLoading} {...activePicture} />
              </Box>
            )}
          </Flex>
        </Box>
      </Layout>
    </>
  )
}

export default MainPage
