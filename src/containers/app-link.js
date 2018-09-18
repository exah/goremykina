import React, { Component } from 'react'
import styled from 'react-emotion'
import { compose } from 'recompose'
import { system } from 'pss'
import { withRouter } from 'react-router-dom'
import { createBaseComponent } from 'pss-components'
import { ALT_LANG } from '../constants'
import { withIntl } from '../hocs'
import { noop } from '../utils'

const DEFAULT_COMP = 'a'

const StyledLink = styled(createBaseComponent(DEFAULT_COMP))(system)

class AppLink extends Component {
  static defaultProps = {
    comp: DEFAULT_COMP,
    onClick: noop
  }

  getLocation = () => {
    const { intl, to, data, path, alternate } = this.props

    const lang = alternate === true ? ALT_LANG[intl.lang] : intl.lang
    const location = to || intl.link(path, { lang, ...data })

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
        comp={comp}
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
