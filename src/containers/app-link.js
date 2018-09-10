import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { withIntl } from '../hocs'

const AppLink = ({
  _t,
  _link,
  intl,
  lang,
  langAlt,
  to,
  data,
  path,
  replace,
  innerRef,
  children,
  ...rest
}) => {
  const target = to || _link(path, data)
  return (
    <RouterLink to={target} replace={replace} innerRef={innerRef} {...rest}>
      {children}
    </RouterLink>
  )
}

export default withIntl(AppLink)
