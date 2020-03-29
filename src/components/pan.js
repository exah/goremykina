import React, { useRef, useEffect } from 'react'
import styled from '@emotion/styled'

const PanWrapper = styled('div')`
  touch-action: none;
  user-select: none;
`

export function Pan(props) {
  const ref = useRef(null)

  const matrix = [1, 0, 0, 1, 0, 0]
  const data = { dx: 0, dy: 0, mx: 0, my: 0, isDragging: false }

  useEffect(() => {
    ref.current.setAttribute('touch-action', 'none')
  }, [ref])

  function handlePointerDown(event) {
    event.nativeEvent.stopImmediatePropagation()
    event.stopPropagation()
    event.preventDefault()

    data.dx = matrix[4]
    data.dy = matrix[5]
    data.mx = event.pageX
    data.my = event.pageY
    data.isDragging = true

    ref.current.style.cursor = 'move'
  }

  function handlePointerUp() {
    data.isDragging = false

    ref.current.style.cursor = ''
  }

  function handlePointerMove(event) {
    if (data.isDragging) {
      matrix[4] = event.pageX - data.mx + data.dx
      matrix[5] = event.pageY - data.my + data.dy

      ref.current.firstChild.style.transform = `matrix(${matrix})`
    }
  }

  return (
    <PanWrapper
      ref={ref}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerMove={handlePointerMove}
      {...props}
    />
  )
}
