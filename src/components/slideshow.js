import React, { useRef, useState, useEffect, useLayoutEffect } from 'react'
import { Box, Flex } from 'pss-components'
import { useElements, useEmblaCarousel } from '../hooks'

const useIsomorphicEffect =
  typeof window === 'undefined' ? useEffect : useLayoutEffect

function Slideshow({ onChange, defaultIndex = 0, children }) {
  const boxRef = useRef(null)
  const defaultIndexRef = useRef(defaultIndex)
  const [isMounted, setMounted] = useState(false)

  const getEmbla = useEmblaCarousel(boxRef, {
    startIndex: defaultIndexRef.current
  })

  useIsomorphicEffect(() => {
    if (isMounted) {
      getEmbla().changeOptions({ startIndex: defaultIndex })
    } else {
      setMounted(true)
    }
  }, [getEmbla, isMounted])

  useEffect(() => {
    const embla = getEmbla()

    function handleSelect() {
      onChange(embla.selectedScrollSnap())
    }

    embla.on('select', handleSelect)
    return () => {
      embla.off('select', handleSelect)
    }
  }, [getEmbla, onChange])

  useEffect(() => {
    const embla = getEmbla()

    function handleKeyDown(event) {
      switch (event.code) {
        case 'ArrowLeft': {
          embla.scrollPrev()
          break
        }
        case 'ArrowRight': {
          embla.scrollNext()
          break
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown, { passive: true })
    return () => {
      window.removeEventListener('keydown', handleKeyDown, { passive: true })
    }
  }, [])

  function handleClick(event) {
    if (getEmbla().clickAllowed()) {
      const rect = event.currentTarget.getBoundingClientRect()
      const position = (event.clientX - rect.left) / rect.width

      if (position > 0.6) {
        getEmbla().scrollNext()
      }

      if (position < 0.4) {
        getEmbla().scrollPrev()
      }
    } else {
      event.preventDefault()
    }
  }

  const elements = useElements(children).map((child) => (
    <Box key={child.key} flex='0 0 100%' height='100%'>
      {child}
    </Box>
  ))

  return (
    <Box
      ref={boxRef}
      position='absolute'
      height='100%'
      width='100%'
      onClick={handleClick}
    >
      <Flex height='100%'>{isMounted ? elements : elements[defaultIndex]}</Flex>
    </Box>
  )
}

export { Slideshow }
