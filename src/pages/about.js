import React, { Component, createRef } from 'react'
import styled from 'react-emotion'
import { compose } from 'recompose'
import { withData } from 'react-universal-data'
import anime from 'animejs'
import { Layout, Box, Grid, Text, withCurrentMedia } from 'pss-components'
import { Flipped } from 'react-flip-toolkit'
import { ROUTE_PICTURE, ROUTE_ABOUT } from '../constants'
import { AppLink } from '../containers'
import { Modal } from '../components'
import { withIntl } from '../hocs'
import { getPage } from '../api'
import { renderMarkdown, loop } from '../utils'

const PhotoBox = styled(Box)`
  transform-origin: top right;
  mix-blend-mode: multiply;
`

const Img = styled('img')`
  display: block;
  width: 100%;
  height: auto;
`

const transition = ($el, start, end, next) => {
  if (end === 0) {
    $el.querySelector('[data-hide]').style.visibility = 'hidden'
  }

  const fadeAnime = anime({
    targets: $el.querySelectorAll('[data-fade]'),
    opacity: [ start, end ],
    duration: 400,
    easing: 'easeInOutSine'
  }).finished

  const scaleAnime = anime({
    targets: $el.querySelectorAll(PhotoBox),
    scale: [ start, end ],
    opacity: [ start, end ],
    duration: 400,
    easing: 'easeInOutSine'
  }).finished

  Promise.all([ fadeAnime, scaleAnime ]).then(next)
}

class AboutPage extends Component {
  state = {
    isAppeared: false,
    isPhotoReady: false
  }
  handlePhotoLoad = () => {
    this.setState({ isPhotoReady: true })
  }
  handleAppear = (el) => {
    transition(el, 0, 1, () => {
      this.setState({ isAppeared: true })
    })
  }
  handleExit = (el, index, next) => {
    transition(el, 1, 0, next)
  }
  $scroller = createRef()
  $photo = createRef()
  $pic = createRef()
  updateRects = () => {
    const isPhotoImgNode = this.$photo.current.firstChild != null
    this.photoRect = this.$photo.current.getBoundingClientRect()
    this.picRect = this.$pic.current.getBoundingClientRect()
    this.minScale = isPhotoImgNode ? (this.picRect.height / this.photoRect.height) : 1
  }
  componentDidMount () {
    this.updateRects()

    let prevScrollTop
    this.off = loop((now) => {
      if (this.props.currentMediaKey.includes('L')) return

      const { scrollTop } = this.$scroller.current
      if (scrollTop === prevScrollTop || scrollTop < 0) return
      prevScrollTop = scrollTop

      const scale = 1 - (scrollTop / this.photoRect.bottom)
      if (scale < this.minScale) return

      this.$photo.current.style.transform = `scale(${scale})`
    })
  }
  componentWillUnmount () {
    this.off()
  }
  componentDidUpdate () {
    this.updateRects()
  }
  render () {
    const {
      _t,
      langAlt,
      activePicture: pic,
      content,
      photo
    } = this.props

    return (
      <Flipped flipId='about-page' onAppear={this.handleAppear} onExit={this.handleExit}>
        <Modal>
          <Box ht ovsy ovtouch innerRef={this.$scroller}>
            <Layout>
              <Layout.Item pd={2} mgl='auto' hideM>
                <AppLink path={ROUTE_ABOUT} lang={langAlt}>
                  <Text>{_t('nav.lang')}</Text>
                </AppLink>
              </Layout.Item>
              <Layout.Body pdx={2}>
                <Grid spacex={2} alignItems='flex-start'>
                  <Grid.Item
                    position='sticky' bottomL topM
                    col={1} colT={3} colM={4}
                    mgt='auto' mgtM={0}
                    pdy={2}
                  >
                    <AppLink path={ROUTE_PICTURE} data={pic} title={_t('nav.back')}>
                      {pic ? (
                        <Flipped flipId={'pic-' + pic.id}>
                          <Box data-hide innerRef={this.$pic}>
                            <Img src={pic.url} alt='' />
                          </Box>
                        </Flipped>
                      ) : _t('nav.back')}
                    </AppLink>
                  </Grid.Item>
                  <Grid.Item mgx='auto' col={6} colT={8} colM={16} orderM={1}>
                    <Box data-fade pdt={2}>
                      {renderMarkdown(content)}
                    </Box>
                  </Grid.Item>
                  <Grid.Item col={3} colT={4} colM={12} position='sticky' top>
                    <Box pdt={2}>
                      <PhotoBox innerRef={this.$photo} ratio={photo && photo.width / photo.height}>
                        {photo && (
                          <Img
                            src={photo.url}
                            width={photo.width}
                            height={photo.height}
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
        </Modal>
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
