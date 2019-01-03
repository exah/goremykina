import React from 'react'
import { Route } from 'react-router'

const RouteWithProps = ({
  path,
  exact,
  strict,
  location,
  sensitive,
  component: Component,
  ...rest
}) => (
  <Route
    path={path}
    exact={exact}
    strict={strict}
    location={location}
    sensitive={sensitive}
    render={(data) => <Component {...data} {...rest} />}
  />
)

export { RouteWithProps }
