import React, { PureComponent, createRef } from 'react'
import styled from '@emotion/styled'
import { createBase } from 'pss-components'

const PanZoomBox = styled(createBase('div', { whitelist: 'touch-action' }))`
  touch-action: none;
  user-select: none;
`

class PanZoom extends PureComponent {
  static defaultProps = {
    onPan: () => undefined,
    dx: 0,
    dy: 0,
    zoom: 1
  }

  $panWrapper = createRef()

  constructor (props) {
    super(props)

    const { dx, dy, zoom } = props

    const dragData = {
      dx,
      dy,
      x: 0,
      y: 0
    }

    const matrix = [
      zoom, 0, 0, zoom, dx, dy
    ]

    this.state = {
      isDragging: false,
      dragData,
      matrix
    }
  }

  getNewMatrixData = (x, y) => {
    const { dragData, matrix } = this.state

    const deltaX = dragData.x - x
    const deltaY = dragData.y - y

    matrix[4] = dragData.dx - deltaX
    matrix[5] = dragData.dy - deltaY

    return matrix
  }

  handleMouseDown = (e) => {
    const { matrix } = this.state

    const offsetX = matrix[4]
    const offsetY = matrix[5]

    const newDragData = {
      dx: offsetX,
      dy: offsetY,
      x: e.pageX,
      y: e.pageY
    }

    this.setState({
      dragData: newDragData,
      isDragging: true
    })

    if (this.$panWrapper.current) {
      this.$panWrapper.current.style.cursor = 'move'
    }

    e.stopPropagation()
    e.nativeEvent.stopImmediatePropagation()
    e.preventDefault()
  }

  handleMouseUp = () => {
    this.setState({
      isDragging: false
    })

    if (this.$panWrapper.current) {
      this.$panWrapper.current.style.cursor = ''
    }

    if (this.props.onPan) {
      this.props.onPan(this.state.matrix[4], this.state.matrix[5])
    }
  }

  handleMouseMove = (e) => {
    if (this.state.isDragging) {
      const matrix = this.getNewMatrixData(e.pageX, e.pageY)

      this.setState({
        matrix
      })

      if (this.$panWrapper.current) {
        const $el = this.$panWrapper.current.firstChild
        $el.style.transform = `matrix(${this.state.matrix.toString()})`
      }
    }
  }

  render () {
    const {
      onPan,
      dx,
      dy,
      zoom,
      ...rest
    } = this.props

    return (
      <PanZoomBox
        ref={this.$panWrapper}
        onPointerDown={this.handleMouseDown}
        onPointerUp={this.handleMouseUp}
        onPointerMove={this.handleMouseMove}
        touch-action='none'
        {...rest}
      />
    )
  }
}

export {
  PanZoom
}
