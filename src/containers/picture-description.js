import React from 'react'
import { Text } from 'pss-components'
import { withIntl } from '../hocs'

const Noop = () => <>&nbsp;</>
const join = (...arr) => arr.filter(Boolean).join(', ') || (<Noop />)

const PictureDescription = ({ intl, isLoading, name, size, material }) => (
  <Text align='right' alignM='center'>
    <Text mgb>
      {(isLoading || name == null) ? <Noop /> : name}
    </Text>
    <Text textStyle='caption'>
      {isLoading ? intl.t('ui.loading') : join(material, size)}
    </Text>
  </Text>
)

export default withIntl(PictureDescription)
