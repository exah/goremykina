import React, { Component, PureComponent } from 'react'
import { noop } from '@exah/utils'
import styled from '@emotion/styled'
import { Box } from 'pss-components'
import isHotkey from 'is-hotkey'
import SwipeableViews from 'react-swipeable-views'
import { mod } from 'react-swipeable-views-core'
import EventListener from 'react-event-listener'
import PropTypes from 'prop-types'

class SwipeableViewsVirtualized extends PureComponent {
  static propTypes = {
    index: PropTypes.number,
    onChangeIndex: PropTypes.func.isRequired,
    onTransitionEnd: PropTypes.func.isRequired,
    overscanSlideAfter: PropTypes.number,
    overscanSlideBefore: PropTypes.number,
    slideCount: PropTypes.number,
    children: PropTypes.func.isRequired
  }

  static defaultProps = {
    overscanSlideAfter: 2,
    overscanSlideBefore: 3,
    onChangeIndex: noop,
    onTransitionEnd: noop
  }

  state = { index: this.props.index || 0 }

  timer = null

  componentWillMount () {
    this.setWindow(this.state.index)
  }

  componentWillReceiveProps (nextProps) {
    const { index } = nextProps

    if (typeof index === 'number' && index !== this.props.index) {
      const indexDiff = index - this.props.index
      this.setIndex(index, this.state.indexContainer + indexDiff, indexDiff)
    }
  }

  componentWillUnmount () {
    clearTimeout(this.timer)
  }

  setIndex (index, indexContainer, indexDiff) {
    const nextState = {
      index,
      indexContainer,
      indexStart: this.state.indexStart,
      indexStop: this.state.indexStop
    }

    // We are going forward, let's render one more slide ahead.
    if (
      indexDiff > 0 &&
      (!this.props.slideCount ||
        nextState.indexStop < this.props.slideCount - 1)
    ) {
      nextState.indexStop += 1
    }

    // Extend the bounds if needed.
    if (index > nextState.indexStop) {
      nextState.indexStop = index
    }

    const beforeAhead = nextState.indexStart - index

    // Extend the bounds if needed.
    if (beforeAhead > 0) {
      nextState.indexContainer += beforeAhead
      nextState.indexStart -= beforeAhead
    }

    this.setState(nextState)
  }

  setWindow (index = this.state.index) {
    const { slideCount } = this.props

    let beforeAhead = this.props.overscanSlideBefore
    let afterAhead = this.props.overscanSlideAfter

    if (slideCount) {
      if (beforeAhead > index) {
        beforeAhead = index
      }

      if (afterAhead + index > slideCount - 1) {
        afterAhead = slideCount - index - 1
      }
    }

    this.setState({
      indexContainer: beforeAhead,
      indexStart: index - beforeAhead,
      indexStop: index + afterAhead
    })
  }

  handleChangeIndex = (indexContainer, indexLatest) => {
    const { slideCount, onChangeIndex } = this.props

    const indexDiff = indexContainer - indexLatest
    let index = this.state.index + indexDiff

    if (slideCount) {
      index = mod(index, slideCount)
    }

    // Is uncontrolled
    if (this.props.index === undefined) {
      this.setIndex(index, indexContainer, indexDiff)
    }

    onChangeIndex(index, this.state.index)
  }

  handleTransitionEnd = () => {
    // Delay the update of the window to fix an issue with react-motion.
    this.timer = setTimeout(() => {
      this.setWindow()
    }, 0)

    this.props.onTransitionEnd()
  }

  render () {
    const {
      innerRef,
      index: indexProp,
      onChangeIndex,
      onTransitionEnd,
      overscanSlideAfter,
      overscanSlideBefore,
      slideCount,
      children: renderSlides,
      ...other
    } = this.props

    const { indexContainer, indexStart, indexStop } = this.state

    const slides = []

    for (
      let slideIndex = indexStart;
      slideIndex <= indexStop;
      slideIndex += 1
    ) {
      slides.push(
        renderSlides({
          index: slideIndex,
          key: slideIndex
        })
      )
    }

    return (
      <SwipeableViews
        ref={innerRef}
        index={indexContainer}
        onChangeIndex={this.handleChangeIndex}
        onTransitionEnd={this.handleTransitionEnd}
        {...other}
      >
        {slides}
      </SwipeableViews>
    )
  }
}

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
    return (
      props.slideCount !== this.props.slideCount ||
      this.state.index !== state.index
    )
  }

  render () {
    const { duration, easeFunction, delay, ...rest } = this.props
    const { index } = this.state

    return (
      <EventListener target='window' onKeyDown={this.handleKeyDown}>
        <SwipeableViewsVirtualized
          innerRef={this.setIntance}
          index={index}
          onChangeIndex={this.handleViewChange}
          springConfig={{ duration, easeFunction, delay }}
          onClick={this.handleClick}
          {...rest}
        />
      </EventListener>
    )
  }
}

export { Slideshow }
