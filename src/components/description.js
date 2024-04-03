import React from 'react'
import { Text } from 'pss-components'
import { join } from '../utils'
import { useIntl } from '../hooks'

export function Description({ isLoading, name, size, material, year }) {
  const intl = useIntl()

  return (
    <Text
      mb={{ all: '3rem', md: 0 }}
      textAlign={{ all: 'right', sm: 'center' }}
    >
      <Text mb>{isLoading || name == null ? null : name}</Text>
      <Text variant='caption'>
        {isLoading ? intl.t('ui.loading') : join(material, size, year)}
      </Text>
    </Text>
  )
}
