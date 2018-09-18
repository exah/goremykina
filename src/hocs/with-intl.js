import React from 'react'
import { IntlConsumer } from '../contexts'

const withIntl = (Comp) => (props) => (
  <IntlConsumer>
    {(intl) => (
      <Comp {...props} intl={intl} />
    )}
  </IntlConsumer>
)

export {
  withIntl
}
