import React from 'react'
import styled from 'react-emotion'
import { compose } from 'recompose'
import { Box, Grid } from 'pss-components'
import anime from 'animejs'
import { Flipped } from 'react-flip-toolkit'
import { withData } from 'react-universal-data'
import { ROUTE_HOME } from '../constants'
import { AppLink } from '../containers'
import { Modal } from '../components'
import { withIntl } from '../hocs'
import { getPage } from '../api'
import { renderMarkdown } from '../utils'

const Img = styled('img')`
  display: block;
  width: 100%;
  height: auto;
`

const transition = ($el, start, end, next) => {
  if (end === 0) {
    $el.style.backgroundColor = 'transparent'
    $el.querySelector('[data-hide]').style.visibility = 'hidden'
  }

  const fadeAnime = anime({
    targets: $el.querySelectorAll('[data-fade]'),
    opacity: [ start, end ],
    duration: 400,
    easing: 'easeInOutSine'
  }).finished

  const scaleAnime = anime({
    targets: $el.querySelectorAll('[data-scale]'),
    scale: [ start, end ],
    opacity: [ start, end ],
    duration: 400,
    easing: 'easeInOutSine'
  }).finished

  Promise.all([ fadeAnime, scaleAnime ]).then(next)
}

const onAppear = (el) => transition(el, 0, 1)
const onExit = (el, index, next) => transition(el, 1, 0, next)

const About = ({ _t, activePicture, content, photo }) => (
  <Flipped flipId='about-page' onAppear={onAppear} onExit={onExit}>
    <Modal bg='site-background'>
      <Box pd={2} ht ovsy ovtouch>
        <Grid ht spacex>
          <Grid.Item col={1} mgt='auto'>
            <AppLink path={ROUTE_HOME} title={_t('nav.back')}>
              {activePicture ? (
                <Flipped flipId={'pic-' + activePicture.id}>
                  <Box data-hide>
                    <Img src={activePicture.url} alt='' />
                  </Box>
                </Flipped>
              ) : _t('nav.back')}
            </AppLink>
          </Grid.Item>
          <Grid.Item mgx='auto' col={6} mgt={3}>
            <Box data-fade>
              {renderMarkdown(content)}
            </Box>
          </Grid.Item>
          <Grid.Item col={3} mgt={3}>
            <Box data-scale css={{ transformOrigin: 'top right', mixBlendMode: 'multiply' }}>
              {photo && (
                <Img
                  src={photo.url}
                  width={photo.width}
                  height={photo.height}
                  alt=''
                />
              )}
            </Box>
          </Grid.Item>
        </Grid>
      </Box>
    </Modal>
  </Flipped>
)

export default compose(
  withData(
    ({ match }) => getPage({ ...match.params, slug: 'about' }).then((res) => ({
      status: res.status,
      ...res.data
    })),
    (prev, next) =>
      prev.match.params.lang !== next.match.params.lang
  ),
  withIntl
)(About)
