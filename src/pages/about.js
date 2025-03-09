import React, { useState, useRef, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import anime from 'animejs'
import styled from '@emotion/styled'
import { Flipped } from 'react-flip-toolkit'
import { ALT_LANG, ROUTE_MAIN, ROUTE_ABOUT } from '../constants'
import { useFetchPage, useIntl } from '../hooks'
import {
  Layout,
  Box,
  FlexGrid,
  Text,
  Image,
  Link,
  Markdown,
  RouteLink,
  useMatchMediaContext
} from '../components'

const PhotoBox = styled(Box)`
  position: relative;
  transform-origin: top right;

  &::before {
    position: relative;
    width: 100%;
    margin-left: 0;
    background-color: ${(props) => props.overlayColor};
    z-index: 1;
    mix-blend-mode: color;
  }

  & > ${Image} {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 0;
  }
`

const animate = (opts) =>
  anime({
    ...opts,
    duration: 400,
    easing: 'easeInOutSine'
  }).finished

const transition = ($el, start, end, next, isStuck) => {
  if (end === 0) {
    $el.querySelector('[data-transition-hide]').style.visibility = 'hidden'
  }

  const fadeAnime = animate({
    targets: $el.querySelectorAll('[data-transition-fade]'),
    opacity: [start, end]
  })

  const scaleAnime = isStuck
    ? animate({
        targets: $el.querySelectorAll(PhotoBox),
        opacity: [start, end]
      })
    : animate({
        targets: $el.querySelectorAll(PhotoBox),
        scale: [start, end],
        opacity: [start, end]
      })

  Promise.all([fadeAnime, scaleAnime]).then(next)
}

function AboutPage({ activePicture }) {
  const intl = useIntl()
  const page = useFetchPage('about')
  const isMobile = !useMatchMediaContext().matches.includes('md')
  const canonicalUrl = intl.href(ROUTE_ABOUT)

  const photoRef = useRef(null)
  const pictureRef = useRef(null)

  const [isStuck, setStuck] = useState(false)
  const [isAppeared, setAppeared] = useState(false)
  const [isLoaded, setLoaded] = useState(false)
  const [rects, setRects] = useState([])

  useEffect(() => {
    if (isMobile) {
      setRects([
        pictureRef.current.getBoundingClientRect(),
        photoRef.current.getBoundingClientRect()
      ])
    } else {
      photoRef.current.style.transform = ''
    }
  }, [isLoaded, isAppeared, isMobile])

  const handleAppear = (el) => {
    transition(el, 0, 1, () => setAppeared(true))
  }

  const handleExit = (el, _, next) => {
    transition(el, 1, 0, next, isStuck)
  }

  const handleScroll = (event) => {
    if (!isMobile || event.target.scrollTop < 0) {
      return
    }

    const [pictureRect, photoRect] = rects

    const hasFirstNode = photoRef.current.firstChild != null
    const minScale = hasFirstNode ? pictureRect.height / photoRect.height : 1
    const maxScale = 1 - event.target.scrollTop / photoRect.bottom

    if (maxScale < minScale) {
      if (isStuck === false) {
        setStuck(true)
        photoRef.current.style.transform = `scale(${minScale})`
      }

      return
    }

    setStuck(false)
    photoRef.current.style.transform = `scale(${maxScale})`
  }

  return (
    <>
      <Helmet>
        <title>{intl.t('title.about')}</title>
        <meta property='og:url' content={canonicalUrl} />
        <meta property='og:title' content={intl.t('title')} />
        {page.isReady && (
          <>
            <meta
              property='og:image'
              content={intl.href(page.result.photo.url)}
            />
            <meta property='og:image:width' content={page.result.photo.width} />
            <meta
              property='og:image:height'
              content={page.result.photo.height}
            />
          </>
        )}
        <link rel='canonical' href={canonicalUrl} />
        <link rel='alternate' href={canonicalUrl} hrefLang='x-default' />
        <link
          rel='alternate'
          href={intl.href(ROUTE_ABOUT, null, ALT_LANG[intl.lang])}
          hrefLang={ALT_LANG[intl.lang]}
        />
      </Helmet>
      <Flipped flipId='about-page' onAppear={handleAppear} onExit={handleExit}>
        <Box height='100%' overflow='hidden auto touch' onScroll={handleScroll}>
          <Layout flexDirection='column' minHeight='100%'>
            <Box
              p={2}
              ml='auto'
              hide='sm'
              style={{ color: 'white', mixBlendMode: 'difference' }}
            >
              <RouteLink path={ROUTE_ABOUT} alternate>
                <Text>{intl.t('nav.lang')}</Text>
              </RouteLink>
            </Box>
            <FlexGrid
              flex='1 1 auto'
              columns={16}
              spacex={2}
              px={2}
              alignItems='flex-start'
            >
              <FlexGrid.Item
                column={{ sm: 4, md: 3, lg: 2 }}
                position='sticky'
                top={{ sm: 0 }}
                bottom={{ md: 0 }}
                mt={{ md: 'auto' }}
                py={2}
              >
                <RouteLink
                  path={ROUTE_MAIN}
                  data={activePicture}
                  title={intl.t('nav.back')}
                >
                  {activePicture ? (
                    <Flipped flipId={'pic-' + activePicture.id}>
                      <Box
                        ref={pictureRef}
                        ratio={
                          activePicture.original.width /
                          activePicture.original.height
                        }
                        data-transition-hide
                      >
                        <Image
                          src={activePicture.original.url}
                          width='100%'
                          height='100%'
                          alt=''
                        />
                      </Box>
                    </Flipped>
                  ) : (
                    intl.t('nav.back')
                  )}
                </RouteLink>
              </FlexGrid.Item>
              <FlexGrid.Item
                column={{ sm: 16, md: 8, lg: 6 }}
                order={{ sm: 1 }}
                mx='auto'
                style={{ color: 'white', mixBlendMode: 'difference' }}
              >
                <Box pt={2} data-transition-fade>
                  {page.isReady ? (
                    <Markdown value={page.result.content} />
                  ) : (
                    intl.t('ui.loading')
                  )}
                  <Box
                    position={{ lg: 'absolute' }}
                    bottom={0}
                    right={0}
                    py={{ sm: 3, md: 2 }}
                    px={{ lg: 2 }}
                  >
                    <Text
                      textAlign={{ sm: 'center' }}
                      variant={{ all: 'text', lg: 'default' }}
                    >
                      <Link href='mailto:contact@goremykina.com'>
                        💬 contact@goremykina.com
                      </Link>
                    </Text>
                  </Box>
                </Box>
              </FlexGrid.Item>
              <FlexGrid.Item
                column={{ sm: 12, md: 4, lg: 3 }}
                position='sticky'
                top={0}
              >
                <Box py={2}>
                  <PhotoBox
                    ref={photoRef}
                    ratio={page.isReady ? page.result.photo.ratio : null}
                    overlayColor={activePicture && activePicture.color}
                  >
                    {page.isReady && (
                      <Image
                        src={page.result.photo.url}
                        onLoad={() => setLoaded(true)}
                        alt=''
                      />
                    )}
                  </PhotoBox>
                </Box>
              </FlexGrid.Item>
            </FlexGrid>
          </Layout>
        </Box>
      </Flipped>
    </>
  )
}

export default AboutPage
