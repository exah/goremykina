import React from 'react'
import { IntlContext } from '../contexts'

const withIntl = (Comp) => {
  const HOC = (props) => (
    <IntlContext.Consumer>
      {(intl) => <Comp {...props} intl={intl} />}
    </IntlContext.Consumer>
  )

  HOC.displayName = `withIntl(${Comp.displayName || 'Component'})`
  HOC.getInitialProps = Comp.getInitialProps
  return HOC
}

export { withIntl }
