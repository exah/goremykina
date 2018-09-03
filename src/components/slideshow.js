import React, { PureComponent } from 'react'
import { Box } from 'pss-components'
import styled from 'react-emotion'
import SwipeableViews from 'react-swipeable-views'

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
    defaultView: 0,
    equalHeight: undefined,
    animateHeight: false,
    enableMouseEvents: true,
    resistance: true,
    ignoreNativeScroll: true,
    hysteresis: 0.4,
    duration: '0.4s',
    easeFunction: 'cubic-bezier(0.15, 0.3, 0.25, 1)',
    onChange: () => undefined,
    delay: '0s'
  }
  static getDerivedStateFromProps (props, state) {
    const views = React.Children.toArray(props.children)
    const lastViewIndex = (views.length - 1)

    return {
      views,
      lastViewIndex
    }
  }
  state = {
    currentViewIndex: this.props.defaultView,
    lastViewIndex: 0,
    views: []
  }
  componentDidMount () {
    this.updateSize()
  }
  componentDidUpdate () {
    this.updateSize()
  }
  setIntance = (ref) => {
    this.instance = ref
  }
  handleClickPrev = (e) => {
    e.stopPropagation()
    const { currentViewIndex } = this.state

    this.handleViewChange(Math.max(currentViewIndex - 1, 0))
  }
  handleClickNext = (e) => {
    e.stopPropagation()
    const { currentViewIndex, lastViewIndex } = this.state

    this.handleViewChange(Math.min(currentViewIndex + 1, lastViewIndex))
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
      this.handleClickNext(e)
    }

    if (position < 0.4) {
      this.handleClickPrev(e)
    }
  }
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
      equalHeight,
      animateHeight,
      easeFunction,
      hysteresis,
      ignoreNativeScroll,
      resistance,
      enableMouseEvents,
      delay,
      children,
      ...rest
    } = this.props

    const {
      currentViewIndex,
      views
    } = this.state

    return (
      <Box onClick={this.handleClick} {...rest}>
        <SwipeableViews
          ref={this.setIntance}
          index={currentViewIndex}
          onChangeIndex={this.handleViewChange}
          animateHeight={animateHeight}
          springConfig={{ duration, easeFunction, delay }}
          hysteresis={hysteresis}
          ignoreNativeScroll={ignoreNativeScroll}
          resistance={resistance}
          enableMouseEvents={enableMouseEvents}
          style={{ height: equalHeight }}
          containerStyle={{ height: equalHeight }}
        >
          {views}
        </SwipeableViews>
      </Box>
    )
  }
}

export {
  Slideshow
}
