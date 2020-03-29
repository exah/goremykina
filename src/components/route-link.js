import React from 'react'
import { useHistory } from 'react-router'
import { Link } from '.'
import { useIntl } from '../hooks'

export function RouteLink({
  data,
  path,
  disable,
  children,
  alternate,
  ...rest
}) {
  const history = useHistory()
  const intl = useIntl()

  const getLocation = () => ({
    pathname: intl.link(path, data, alternate ? intl.langAlt : intl.lang)
  })

  const handleClick = (event) => {
    event.preventDefault()
    history.push(getLocation())
  }

  if (disable) {
    return <>{children}</>
  }

  return (
    <Link
      href={history.createHref(getLocation())}
      onClick={handleClick}
      {...rest}
    >
      {children}
    </Link>
  )
}
