import React from 'react'
import { Route } from 'react-router-dom'

const routeRender = (Component, rest) =>
  (props) => <Component {...props} {...rest} /> // eslint-disable-line

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
    render={routeRender(Component, { path, ...rest })}
  />
)

export {
  RouteWithProps
}
