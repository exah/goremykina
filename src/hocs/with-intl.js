import React from 'react'
import { IntlConsumer } from '../contexts'

const withIntl = (Comp) => {
  const HOC = (props) => (
    <IntlConsumer>{(intl) => <Comp {...props} intl={intl} />}</IntlConsumer>
  )

  HOC.displayName = `withIntl(${Comp.displayName || 'Component'})`
  HOC.getInitialProps = Comp.getInitialProps
  return HOC
}

export { withIntl }
