import React from 'react'
import { Text } from 'pss-components'
import { Noop, join } from '../utils'
import { withIntl } from '../hocs'

const PictureDescription = ({ intl, isLoading, name, size, material }) => (
  <Text textAlign={{ all: 'right', sm: 'center' }}>
    <Text mgb>{isLoading || name == null ? <Noop /> : name}</Text>
    <Text variant='caption'>
      {isLoading ? intl.t('ui.loading') : join(material, size)}
    </Text>
  </Text>
)

export default withIntl(PictureDescription)
