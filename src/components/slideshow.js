import React, { PureComponent } from 'react'
import styled from 'react-emotion'
import { Box } from 'pss-components'
import isHotkey from 'is-hotkey'
import SwipeableViews from 'react-swipeable-views'
import { virtualize } from 'react-swipeable-views-utils'
import EventListener from 'react-event-listener'
import { throttle } from '../utils'

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

class Slideshow extends PureComponent {
  static Item = SlideshowItem
  static defaultProps = {
    defaultViewIndex: 0,
    animateHeight: false,
    enableMouseEvents: true,
    resistance: true,
    ignoreNativeScroll: true,
    hysteresis: 0.4,
    duration: '0.4s',
    easeFunction: 'cubic-bezier(0.15, 0.3, 0.25, 1)',
    children: () => undefined,
    onChange: () => undefined,
    delay: '0s'
  }
  state = {
    currentViewIndex: this.props.defaultViewIndex
  }
  componentDidMount () {
    this.updateSize()
  }
  setIntance = (ref) => {
    this.instance = ref
  }
  toPrevSlide = () => {
    const { currentViewIndex } = this.state

    this.handleViewChange(Math.max(currentViewIndex - 1, 0))
  }
  toNextSlide = () => {
    const { slideCount } = this.props
    const { currentViewIndex } = this.state

    this.handleViewChange(Math.min(currentViewIndex + 1, slideCount - 1))
  }
  handleViewChange = (index) => {
    const { onChange } = this.props

    this.setState((s) => {
      if (s.currentViewIndex === index) return

      return {
        currentViewIndex: index
      }
    }, () => {
      this.instance.rootNode.style.transform = ''
      onChange(this.state)
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

    if (position > 0.6) {
      e.stopPropagation()
      this.toNextSlide()
    }

    if (position < 0.4) {
      e.stopPropagation()
      this.toPrevSlide()
    }
  }
  handleKeyDown = (e) => {
    if (isHotkey('left', e)) {
      this.toPrevSlide()
    } else if (isHotkey('right', e)) {
      this.toNextSlide()
    }
  }
  handleResize = throttle(() => {
    this.updateSize()
  })
  updateSize = () => {
    const { containerNode, updateHeight } = this.instance

    containerNode.style.width = ''
    const nextWidth = Math.ceil(containerNode.getBoundingClientRect().width)
    containerNode.style.width = nextWidth + 'px'

    updateHeight()
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
      currentViewIndex
    } = this.state

    return (
      <EventListener target='window' onKeyDown={this.handleKeyDown} onResize={this.handleResize}>
        <SwipeableViewsVirtualized
          innerRef={this.setIntance}
          index={currentViewIndex}
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
