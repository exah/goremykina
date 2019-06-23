import React, { Component } from 'react'
import { compose, noop } from '@exah/utils'
import { withRouter } from 'react-router'
import { Link } from 'pss-components'
import { withIntl } from '../hocs'

const ANCHOR_ELEMENT = 'a'

class AppLink extends Component {
  static defaultProps = {
    as: ANCHOR_ELEMENT,
    onClick: noop
  }

  getLocation = () => {
    const { intl, to, data, path, alternate } = this.props
    const location = to || intl.link(path, data, alternate ? intl.langAlt : intl.lang)

    return (typeof location === 'string')
      ? { pathname: location }
      : location
  }

  getHref = () =>
    this.props.history.createHref(this.getLocation())

  handleClick = (event) => {
    const { as, onClick, href, target, history, replace } = this.props

    onClick(event)

    if ((href == null && target == null) || as !== ANCHOR_ELEMENT) {
      event.preventDefault()

      const location = this.getLocation()

      if (replace) {
        history.replace(location)
      } else {
        history.push(location)
      }
    }
  }

  render () {
    const {
      to,
      data,
      path,
      as,
      disable,
      children,
      alternate,
      onClick, // used in handleClick
      staticContext,
      ...rest
    } = this.props

    if (disable) {
      return (<>{children}</>)
    }

    return (
      <Link
        href={as === ANCHOR_ELEMENT ? this.getHref() : undefined}
        onClick={this.handleClick}
        as={as}
        {...rest}
      >
        {children}
      </Link>
    )
  }
}

export default compose(
  withIntl,
  withRouter
)(AppLink)
