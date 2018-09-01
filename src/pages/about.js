import React from 'react'
import styled from 'react-emotion'
import { compose } from 'recompose'
import { withData } from 'react-universal-data'
import { Box, Grid } from 'pss-components'
import { getPage } from '../api'
import { ROUTE_HOME } from '../constants'
import { Modal } from '../components'
import { AppLink } from '../containers'
import { withIntl } from '../hocs'
import { renderMarkdown } from '../utils'

const Photo = styled('img')`
  display: block;
  width: 100%;
  height: auto;
`

const About = ({ _t, content, photo }) => (
  <Modal opacity={0.9}>
    <Box pd ht ovsy ovtouch>
      <Grid ht spacex>
        <Grid.Item col={1} mgt='auto'>
          <AppLink path={ROUTE_HOME}>
            {_t('nav.back')}
          </AppLink>
        </Grid.Item>
        <Grid.Item mgx='auto' col={6} mgt={2}>
          {renderMarkdown(content)}
        </Grid.Item>
        {photo && (
          <Grid.Item col={3} mgt={2}>
            <Photo src={photo.url} width={photo.width} height={photo.height} alt='' />
          </Grid.Item>
        )}
      </Grid>
    </Box>
  </Modal>
)

export default compose(
  withIntl,
  withData(({ lang }) => getPage({ lang, slug: 'about' }).then((res) => ({
    status: res.status,
    ...res.data
  })))
)(About)
