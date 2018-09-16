import React, { Component, createRef } from 'react'
import styled from 'react-emotion'
import { compose } from 'recompose'
import { withData } from 'react-universal-data'
import anime from 'animejs'
import { Layout, Box, Grid, Text, withCurrentMedia } from 'pss-components'
import { Flipped } from 'react-flip-toolkit'
import { ROUTE_PICTURE, ROUTE_ABOUT } from '../constants'
import { AppLink } from '../containers'
import { withIntl } from '../hocs'
import { getPage } from '../api'
import { renderMarkdown } from '../utils'

const PhotoBox = styled(Box)`
  transform-origin: top right;
`

const Img = styled('img')`
  width: 100%;
  height: auto;
`

const animate = (opts) => anime({
  ...opts,
  duration: 400,
  easing: 'easeInOutSine'
}).finished

const transition = ($el, start, end, next, isStuck) => {
  if (end === 0) {
    $el.querySelector('[data-transition-transparent]').style.backgroundColor = 'transparent'
    $el.querySelector('[data-transition-hide]').style.visibility = 'hidden'
  }

  const fadeAnime = animate({
    targets: $el.querySelectorAll('[data-transition-fade]'),
    opacity: [ start, end ]
  })

  const scaleAnime = isStuck ? animate({
    targets: $el.querySelectorAll(PhotoBox),
    opacity: [ start, end ]
  }) : animate({
    targets: $el.querySelectorAll(PhotoBox),
    scale: [ start, end ],
    opacity: [ start, end ]
  })

  Promise.all([ fadeAnime, scaleAnime ]).then(next)
}

class AboutPage extends Component {
  state = {
    isAppeared: false,
    isPhotoReady: false,
    isStuck: false
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
    transition(el, 1, 0, next, this.state.isStuck)
  }

  updateRects = () => {
    const isPhotoImgNode = this.$photo.current.firstChild != null
    this.photoRect = this.$photo.current.getBoundingClientRect()
    this.picRect = this.$pic.current.getBoundingClientRect()
    this.minScale = isPhotoImgNode ? (this.picRect.height / this.photoRect.height) : 1
  }

  prevScrollTop = null

  handleScroll = (e) => {
    const { currentMediaKey } = this.props
    const { isStuck } = this.state

    if (currentMediaKey.includes('L')) return

    const { scrollTop } = this.$scroller.current
    if (scrollTop === this.prevScrollTop || scrollTop < 0) return
    this.prevScrollTop = scrollTop

    const scale = 1 - (scrollTop / this.photoRect.bottom)
    if (scale < this.minScale) {
      if (isStuck === false) {
        this.setState({
          isStuck: true
        })

        this.$photo.current.style.transform = `scale(${this.minScale})`
      }

      return
    }

    if (isStuck === true) {
      this.setState({
        isStuck: false
      })
    }

    this.$photo.current.style.transform = `scale(${scale})`
  }

  componentDidMount () {
    this.updateRects()
  }

  componentDidUpdate (prevProps, prevState) {
    const shouldUpdateRects = (
      this.props.currentMediaKey !== prevProps.currentMediaKey ||
      this.state.isPhotoReady !== prevState.isPhotoReady ||
      this.state.isAppeared !== prevState.isAppeared
    )

    if (shouldUpdateRects) {
      this.updateRects()
    }
  }

  render () {
    const {
      _t,
      langAlt,
      isLoading,
      activePicture: pic,
      content,
      photo
    } = this.props

    const {
      isStuck
    } = this.state

    return (
      <Flipped flipId='about-page' onAppear={this.handleAppear} onExit={this.handleExit}>
        <Box ht ovsy innerRef={this.$scroller} onScroll={this.handleScroll}>
          <Layout>
            <Layout.Item pd={2} mgl='auto' hideM>
              <AppLink path={ROUTE_ABOUT} lang={langAlt}>
                <Text>{_t('nav.lang')}</Text>
              </AppLink>
            </Layout.Item>
            <Layout.Body
              pdx={2}
              style={{ isolation: 'isolate', backgroundColor: pic ? pic.color : '' }}
              data-transition-transparent
            >
              <Grid spacex={2} alignItems='flex-start'>
                <Grid.Item col={1} colT={3} colM={4}>
                  <Box
                    position='fixed'
                    topM
                    bottomL
                    pdy={2}
                    wd={(1 / 16)}
                    wdT={(2 / 16)}
                    wdM={(3 / 16)}
                  >
                    <AppLink path={ROUTE_PICTURE} data={pic} title={_t('nav.back')}>
                      {pic ? (
                        <Flipped flipId={'pic-' + pic.id}>
                          <Box
                            innerRef={this.$pic}
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
                      ) : _t('nav.back')}
                    </AppLink>
                  </Box>
                </Grid.Item>
                <Grid.Item mgx='auto' col={6} colT={8} colM={16} orderM={1}>
                  <Box pdt={2} data-transition-fade>
                    {isLoading ? _t('ui.loading') : renderMarkdown(content)}
                  </Box>
                </Grid.Item>
                <Grid.Item
                  col={3} colT={4} colM={12}
                  position='sticky' top
                  style={isStuck ? {} : { mixBlendMode: 'multiply' }}
                >
                  <Box pdt={2}>
                    <PhotoBox innerRef={this.$photo} ratio={photo && photo.width / photo.height}>
                      {photo && (
                        <Img
                          src={photo.url}
                          onLoad={this.handlePhotoLoad}
                          alt=''
                        />
                      )}
                    </PhotoBox>
                  </Box>
                </Grid.Item>
              </Grid>
            </Layout.Body>
          </Layout>
        </Box>
      </Flipped>
    )
  }
}

export default compose(
  withIntl,
  withData(
    ({ lang }) => getPage({ lang, slug: 'about' }).then((res) => ({
      status: res.status,
      ...res.data
    })),
    (prev, next) => prev.lang !== next.lang
  ),
  withCurrentMedia
)(AboutPage)
