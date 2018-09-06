import React from 'react'
import styled from 'react-emotion'
import { compose } from 'recompose'
import { withData } from 'react-universal-data'
import anime from 'animejs'
import { Layout, Box, Grid, Text } from 'pss-components'
import { Flipped } from 'react-flip-toolkit'
import { ROUTE_HOME, ROUTE_ABOUT } from '../constants'
import { AppLink } from '../containers'
import { Modal } from '../components'
import { withIntl } from '../hocs'
import { getPage } from '../api'
import { renderMarkdown } from '../utils'

const ScaleBox = styled(Box)`
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
    targets: $el.querySelectorAll(ScaleBox),
    scale: [ start, end ],
    opacity: [ start, end ],
    duration: 400,
    easing: 'easeInOutSine'
  }).finished

  Promise.all([ fadeAnime, scaleAnime ]).then(next)
}

const onAppear = (el) => transition(el, 0, 1)
const onExit = (el, index, next) => transition(el, 1, 0, next)

const About = ({
  _t,
  langAlt,
  activePicture,
  content,
  photo
}) => (
  <Flipped flipId='about-page' onAppear={onAppear} onExit={onExit}>
    <Modal bg='site-background'>
      <Box ht ovsy ovtouch>
        <Layout>
          <Layout.Item pd={2} mgl='auto'>
            <AppLink path={ROUTE_ABOUT} lang={langAlt}>
              <Text>{_t('nav.lang')}</Text>
            </AppLink>
          </Layout.Item>
          <Layout.Body pdx={2}>
            <Grid spacex={2}>
              <Grid.Item col={1} position='sticky' bottom mgt='auto' pdb={2}>
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
              <Grid.Item mgx='auto' col={6}>
                <Box data-fade pdt={2}>
                  {renderMarkdown(content)}
                </Box>
              </Grid.Item>
              <Grid.Item col={3}>
                <ScaleBox position='sticky' top pdt={2}>
                  {photo && (
                    <Img
                      src={photo.url}
                      width={photo.width}
                      height={photo.height}
                      alt=''
                    />
                  )}
                </ScaleBox>
              </Grid.Item>
            </Grid>
          </Layout.Body>
        </Layout>
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
