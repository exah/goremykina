import React, { Component, PureComponent } from 'react'
import PropTypes from 'prop-types'
import { noop, toArr } from '@exah/utils'
import styled from '@emotion/styled'
import { Box } from 'pss-components'
import isHotkey from 'is-hotkey'
import SwipeableViews from 'react-swipeable-views'
import EventListener from 'react-event-listener'

class SlideshowItemBase extends PureComponent {
  handleDrag = (e) => {
    // HACK: Firefox doesn't have css `user-drag` property, so we disable it with js
    if (e.target.nodeName.toLowerCase() === 'img') {
      e.preventDefault()
    }
  }
  render () {
    return <Box onDragStart={this.handleDrag} {...this.props} />
  }
}

const SlideshowItem = styled(SlideshowItemBase)`
  & img {
    user-drag: none;
    user-select: none;
  }
`

class Slideshow extends Component {
  static Item = SlideshowItem

  static propTypes = {
    ...SwipeableViews.propTypes,
    defaultIndex: PropTypes.number,
    onChange: PropTypes.func.isRequired
  }

  static defaultProps = {
    defaultIndex: 0,
    onChange: noop,
    animateHeight: false,
    enableMouseEvents: true,
    resistance: true,
    ignoreNativeScroll: true,
    hysteresis: 0.4,
    duration: '0.4s',
    delay: '0s',
    easeFunction: 'cubic-bezier(0.15, 0.3, 0.25, 1)'
  }

  state = {
    index: this.props.defaultIndex
  }

  setIntance = (ref) => {
    this.instance = ref
  }

  toPrevSlide = () => {
    const { index } = this.state

    this.handleViewChange(Math.max(index - 1, 0))
  }

  toNextSlide = () => {
    const { children } = this.props
    const { index } = this.state

    this.handleViewChange(Math.min(index + 1, toArr(children).length - 1))
  }

  handleViewChange = (index) => {
    this.setState((state, props) => {
      if (state.index === index) return null

      const nextState = { index }

      props.onChange(nextState)
      return nextState
    })
  }

  getMousePosition = (event) => {
    const rect = event.currentTarget.getBoundingClientRect()
    return (event.clientX - rect.left) / rect.width
  }

  handleClick = (e) => {
    if (this.props.enableMouseEvents === false) return
    if (this.instance.isSwiping) return

    const position = this.getMousePosition(e)

    if (position < 0.4) {
      e.stopPropagation()
      this.toPrevSlide()
    }

    if (position > 0.6) {
      e.stopPropagation()
      this.toNextSlide()
    }
  }

  handleKeyDown = (e) => {
    if (isHotkey('left', e)) {
      this.toPrevSlide()
    }

    if (isHotkey('right', e)) {
      this.toNextSlide()
    }
  }

  shouldComponentUpdate (props, state) {
    return (this.state.index !== state.index)
  }

  render () {
    const {
      defaultIndex,
      duration,
      easeFunction,
      delay,
      children,
      ...rest
    } = this.props

    return (
      <EventListener target='window' onKeyDown={this.handleKeyDown}>
        <SwipeableViews
          ref={this.setIntance}
          index={this.state.index}
          springConfig={{ duration, delay, easeFunction }}
          onChangeIndex={this.handleViewChange}
          onClick={this.handleClick}
          {...rest}
        >
          {children}
        </SwipeableViews>
      </EventListener>
    )
  }
}

export { Slideshow }
