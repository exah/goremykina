import React, { Component } from 'react'
import styled from 'react-emotion'
import { compose, noop } from '@exah/utils'
import { system } from 'pss'
import { withRouter } from 'react-router-dom'
import { createBase } from 'pss-components'
import { withIntl } from '../hocs'

const DEFAULT_COMP = 'a'

const StyledLink = styled(createBase(DEFAULT_COMP))(system)

class AppLink extends Component {
  static defaultProps = {
    comp: DEFAULT_COMP,
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
    const { comp, onClick, href, target, history, replace } = this.props

    onClick(event)

    if ((href == null && target == null) || comp !== DEFAULT_COMP) {
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
      comp,
      disable,
      children,
      alternate,
      onClick, // used in handleClick
      ...rest
    } = this.props

    if (disable) {
      return (<>{children}</>)
    }

    return (
      <StyledLink
        href={comp === DEFAULT_COMP ? this.getHref() : undefined}
        onClick={this.handleClick}
        as={comp}
        {...rest}
      >
        {children}
      </StyledLink>
    )
  }
}

export default compose(
  withIntl,
  withRouter
)(AppLink)
