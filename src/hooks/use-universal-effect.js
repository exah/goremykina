import { useEffect, useLayoutEffect } from 'react'

export const useUniversalEffect =
  typeof window === 'undefined' ? useEffect : useLayoutEffect
