import React from 'react'
import { Text } from 'pss-components'
import { Noop, join } from '../utils'
import { useIntl } from '../hooks'

export function PictureDescription({ isLoading, name, size, material, year }) {
  const intl = useIntl()

  return (
    <Text textAlign={{ all: 'right', sm: 'center' }}>
      <Text mb>{isLoading || name == null ? <Noop /> : name}</Text>
      <Text variant='caption'>
        {isLoading ? intl.t('ui.loading') : join(material, size, year)}
      </Text>
    </Text>
  )
}
