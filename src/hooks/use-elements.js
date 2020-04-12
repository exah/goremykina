import React, { useMemo } from 'react'

export function useElements(input) {
  return useMemo(
    () => React.Children.toArray(input).filter(React.isValidElement),
    [input]
  )
}
