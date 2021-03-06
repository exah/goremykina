/** @jsx jsx */
import { jsx, css } from '@emotion/core'

export function Pan(props) {
  const matrix = [1, 0, 0, 1, 0, 0]
  const data = { dx: 0, dy: 0, mx: 0, my: 0, touches: 0 }

  function handlePointerDown(event) {
    data.touches++

    if (data.touches > 1) return

    data.dx = matrix[4]
    data.dy = matrix[5]
    data.mx = event.pageX
    data.my = event.pageY

    event.preventDefault()
    event.currentTarget.style.cursor = 'move'
  }

  function handlePointerUp(event) {
    data.touches = 0
    event.currentTarget.style.cursor = ''
  }

  function handlePointerMove(event) {
    if (data.touches !== 1) return

    matrix[4] = event.pageX - data.mx + data.dx
    matrix[5] = event.pageY - data.my + data.dy

    event.currentTarget.firstChild.style.transform = `matrix(${matrix})`
  }

  return (
    <div
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerMove={handlePointerMove}
      touch-action='none'
      css={css`
        touch-action: none;
        user-select: none;
      `}
      {...props}
    />
  )
}
