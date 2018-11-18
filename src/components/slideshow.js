import React, { Component, PureComponent } from 'react'
import { noop } from '@exah/utils'
import styled from 'react-emotion'
import { Box } from 'pss-components'
import isHotkey from 'is-hotkey'
import SwipeableViews from 'react-swipeable-views'
import { virtualize } from 'react-swipeable-views-utils'
import EventListener from 'react-event-listener'

const SwipeableViewsVirtualized = virtualize(({ innerRef, ...rest }) => (
  <SwipeableViews ref={innerRef} {...rest} />
))

class SlideshowItemBase extends PureComponent {
  handleDrag = (e) => {
    // HACK: Firefox doesn't have css `user-drag` property, so we disable it with js
    if (e.target.nodeName.toLowerCase() === 'img') {
      e.preventDefault()
    }
  }
  render () {
    return (
      <Box onDragStart={this.handleDrag} {...this.props} />
    )
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

  static defaultProps = {
    defaultIndex: 0,
    animateHeight: false,
    enableMouseEvents: true,
    resistance: true,
    ignoreNativeScroll: true,
    hysteresis: 0.4,
    duration: '0.4s',
    easeFunction: 'cubic-bezier(0.15, 0.3, 0.25, 1)',
    slideCount: 0,
    children: noop,
    onChange: noop,
    delay: '0s'
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
    const { slideCount } = this.props
    const { index } = this.state

    this.handleViewChange(Math.min(index + 1, slideCount - 1))
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
    return (props.slideCount !== this.props.slideCount || this.state.index !== state.index)
  }

  render () {
    const {
      duration,
      animateHeight,
      easeFunction,
      hysteresis,
      ignoreNativeScroll,
      resistance,
      enableMouseEvents,
      delay,
      slideCount,
      children
    } = this.props

    const {
      index
    } = this.state

    return (
      <EventListener target='window' onKeyDown={this.handleKeyDown}>
        <SwipeableViewsVirtualized
          innerRef={this.setIntance}
          index={index}
          onChangeIndex={this.handleViewChange}
          animateHeight={animateHeight}
          springConfig={{ duration, easeFunction, delay }}
          hysteresis={hysteresis}
          ignoreNativeScroll={ignoreNativeScroll}
          resistance={resistance}
          enableMouseEvents={enableMouseEvents}
          style={{ height: '100%', overflow: 'visible' }}
          containerStyle={{ height: '100%' }}
          slideStyle={{ overflow: 'visible' }}
          onClick={this.handleClick}
          slideCount={slideCount}
          slideRenderer={children}
        />
      </EventListener>
    )
  }
}

export {
  Slideshow
}
