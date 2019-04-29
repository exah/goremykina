import React from 'react'
import { Text } from 'pss-components'
import { Noop, join } from '../utils'
import { withIntl } from '../hocs'

const PictureDescription = ({
  intl,
  isLoading,
  name,
  size,
  material,
  year
}) => (
  <Text textAlign={{ all: 'right', sm: 'center' }}>
    <Text mb>{isLoading || name == null ? <Noop /> : name}</Text>
    <Text variant='caption'>
      {isLoading ? intl.t('ui.loading') : join(material, size, year)}
    </Text>
  </Text>
)

export default withIntl(PictureDescription)
