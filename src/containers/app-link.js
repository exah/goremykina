import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { withIntl } from '../hocs'

const AppLink = ({
  _link,
  to,
  data,
  path,
  replace,
  innerRef,
  children
}) => {
  const target = to || _link(path, data)
  return (
    <RouterLink to={target} replace={replace} innerRef={innerRef}>
      {children}
    </RouterLink>
  )
}

export default withIntl(AppLink)
