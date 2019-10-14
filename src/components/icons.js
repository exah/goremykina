import React from 'react'
import { Box } from 'pss-components'

const IconClose = ({ bg = 'rgba(0, 0, 0, 0.4)', fg = '#fff', ...rest }) => (
  <Box
    as='svg'
    display='block'
    width={24}
    height={24}
    viewBox='0 0 24 24'
    {...rest}
  >
    <circle cx='12' cy='12' r='12' fill={bg} />
    <path
      fill={fg}
      d='M12.0003571,13.4145707 L6.41421356,19.0007143 L5,17.5865007 L10.5861436,12.0003571 L5,6.41421356 L6.41421356,5 L12.0003571,10.5861436 L17.5865007,5 L19.0007143,6.41421356 L13.4145707,12.0003571 L19.0007143,17.5865007 L17.5865007,19.0007143 L12.0003571,13.4145707 Z'
    />
  </Box>
)

export { IconClose }
