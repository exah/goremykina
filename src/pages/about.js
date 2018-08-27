import React from 'react'
import { compose } from 'recompose'
import { withData } from 'react-universal-data'
import { Grid } from 'pss-components'
import { ROUTE_HOME } from '../constants'
import { Modal } from '../components'
import { AppLink } from '../containers'
import { withIntl } from '../hocs'
import { renderMarkdown } from '../utils'

const About = ({ _t, content }) => (
  <Modal opacity={0.9} pd>
    <Grid spacex ht>
      <Grid.Item col={1} align='flex-end'>
        <AppLink path={ROUTE_HOME}>
          {_t('nav.back')}
        </AppLink>
      </Grid.Item>
      <Grid.Item col={3} />
      <Grid.Item col={6}>
        {renderMarkdown(content)}
      </Grid.Item>
    </Grid>
  </Modal>
)

export default compose(
  withIntl,
  withData(() => import('../data/about'))
)(About)
