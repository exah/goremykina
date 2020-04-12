import React from 'react'
import { useHistory } from 'react-router'
import { ALT_LANG } from '../constants'
import { Link } from 'pss-components'
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
    pathname: intl.link(path, data, alternate ? ALT_LANG[intl.lang] : intl.lang)
  })

  const handleClick = (event) => {
    if (event.defaultPrevented) return

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
