import React, { Component, createRef } from 'react'
import anime from 'animejs'
import Helmet from 'react-helmet'
import styled from '@emotion/styled'
import { compose } from '@exah/utils'
import { Layout, Box, FlexGrid, Text, withCurrentMedia } from 'pss-components'
import { Flipped } from 'react-flip-toolkit'
import { ROUTE_PICTURE, ROUTE_ABOUT } from '../constants'
import { renderMarkdown } from '../utils'
import { AppLink } from '../containers'
import { withIntl, withPageData } from '../hocs'

const Img = styled('img')`
  width: 100%;
  height: auto;
`

const PhotoBox = styled(Box)`
  position: relative;
  transform-origin: top right;

  &::before {
    position: relative;
    width: 100%;
    margin-left: 0;
    background-color: ${(props) => props.overlayColor};
    z-index: 1;
    mix-blend-mode: multiply;
  }

  & > ${Img} {
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

class AboutPage extends Component {
  state = {
    isAppeared: false,
    isPhotoReady: false
  }

  $scroller = createRef()
  $photo = createRef()
  $pic = createRef()

  handlePhotoLoad = () => {
    this.setState({ isPhotoReady: true })
  }

  handleAppear = (el) => {
    transition(el, 0, 1, () => {
      this.setState({ isAppeared: true })
    })
  }

  handleExit = (el, index, next) => {
    transition(el, 1, 0, next, this.isStuck)
  }

  updateRects = () => {
    const isPhotoImgNode = this.$photo.current.firstChild != null
    this.photoRect = this.$photo.current.getBoundingClientRect()
    this.picRect = this.$pic.current.getBoundingClientRect()
    this.minScale = isPhotoImgNode
      ? this.picRect.height / this.photoRect.height
      : 1
  }

  prevScrollTop = null
  isStuck = false // photo and picture is not scaling with scroll

  handleScroll = (e) => {
    const { currentMediaKey } = this.props

    if (currentMediaKey.includes('md')) return

    const { scrollTop } = this.$scroller.current
    if (scrollTop === this.prevScrollTop || scrollTop < 0) return
    this.prevScrollTop = scrollTop

    const scale = 1 - scrollTop / this.photoRect.bottom
    if (scale < this.minScale) {
      if (this.isStuck === false) {
        this.isStuck = true
        this.$photo.current.style.transform = `scale(${this.minScale})`
      }

      return
    }

    this.$photo.current.style.transform = `scale(${scale})`
    this.isStuck = false
  }

  componentDidMount () {
    this.updateRects()
  }

  componentDidUpdate (prevProps, prevState) {
    const shouldUpdateRects =
      this.props.currentMediaKey !== prevProps.currentMediaKey ||
      this.state.isPhotoReady !== prevState.isPhotoReady ||
      this.state.isAppeared !== prevState.isAppeared

    if (shouldUpdateRects) {
      this.updateRects()
    }
  }

  render () {
    const { intl, isLoading, activePicture: pic, content, photo } = this.props
    const canonicalUrl = intl.href(ROUTE_ABOUT)

    return (
      <>
        <Helmet>
          <title>{intl.t('title.about')}</title>
          <meta property='og:url' content={canonicalUrl} />
          <meta property='og:title' content={intl.t('title')} />
          {photo && <meta property='og:image' content={intl.href(photo.url)} />}
          {photo && <meta property='og:image:width' content={photo.width} />}
          {photo && <meta property='og:image:height' content={photo.height} />}
          <link rel='canonical' href={canonicalUrl} />
          <link rel='alternate' href={canonicalUrl} hrefLang='x-default' />
          <link
            rel='alternate'
            href={intl.href(ROUTE_ABOUT, null, intl.langAlt)}
            hrefLang={intl.langAlt}
          />
        </Helmet>
        <Flipped
          flipId='about-page'
          onAppear={this.handleAppear}
          onExit={this.handleExit}
        >
          <Box
            height
            ovsy
            ovtouch
            ref={this.$scroller}
            onScroll={this.handleScroll}
          >
            <Layout>
              <Layout.Item pd={2} mgl='auto' hideOn='sm'>
                <AppLink path={ROUTE_ABOUT} alternate>
                  <Text>{intl.t('nav.lang')}</Text>
                </AppLink>
              </Layout.Item>
              <Layout.Body pdx={2}>
                <FlexGrid spacex={2} alignItems='flex-start' minWidth='100%'>
                  <FlexGrid.Item
                    col={{ sm: 4, md: 3, lg: 2 }}
                    position='sticky'
                    top={{ sm: 0 }}
                    bottom={{ md: 0 }}
                    mgt={{ md: 'auto' }}
                    pdy={2}
                  >
                    <AppLink
                      path={ROUTE_PICTURE}
                      data={pic}
                      title={intl.t('nav.back')}
                    >
                      {pic ? (
                        <Flipped flipId={'pic-' + pic.id}>
                          <Box
                            ref={this.$pic}
                            ratio={pic.original.width / pic.original.height}
                            data-transition-hide
                          >
                            <Img
                              src={pic.original.url}
                              width={pic.original.width}
                              height={pic.original.height}
                              alt=''
                            />
                          </Box>
                        </Flipped>
                      ) : (
                        intl.t('nav.back')
                      )}
                    </AppLink>
                  </FlexGrid.Item>
                  <FlexGrid.Item
                    col={{ sm: 16, md: 8, lg: 6 }}
                    order={{ sm: 1 }}
                    mgx='auto'
                  >
                    <Box pdt={2} data-transition-fade>
                      {isLoading
                        ? intl.t('ui.loading')
                        : renderMarkdown(content)}
                      <Box
                        position={{ lg: 'absolute' }}
                        bottom={0}
                        right={0}
                        pdy={{ sm: 3, md: 2 }}
                        pdx={{ lg: 2 }}
                      >
                        <Text
                          textAlign={{ sm: 'center' }}
                          variant={{ all: 'text', lg: 'default' }}
                        >
                          <a href='mailto:contact@goremykina.com'>
                            💬 contact@goremykina.com
                          </a>
                        </Text>
                      </Box>
                    </Box>
                  </FlexGrid.Item>
                  <FlexGrid.Item
                    col={{ sm: 12, md: 4, lg: 3 }}
                    position='sticky'
                    top={0}
                  >
                    <Box pdy={2}>
                      <PhotoBox
                        ref={this.$photo}
                        ratio={photo && photo.ratio}
                        overlayColor={pic && pic.color}
                      >
                        {photo && (
                          <Img
                            src={photo.url}
                            onLoad={this.handlePhotoLoad}
                            alt=''
                          />
                        )}
                      </PhotoBox>
                    </Box>
                  </FlexGrid.Item>
                </FlexGrid>
              </Layout.Body>
            </Layout>
          </Box>
        </Flipped>
      </>
    )
  }
}

export default compose(
  withIntl,
  withPageData('about'),
  withCurrentMedia
)(AboutPage)
