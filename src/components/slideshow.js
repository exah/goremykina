import React, { useRef, useState, useEffect } from 'react'
import { Box, Flex } from 'pss-components'
import EmblaCarousel from 'embla-carousel'
import { useElements, useUniversalEffect } from '../hooks'

const inRange = (index, current, visible) =>
  current >= index - visible && current <= index + visible

function Slideshow({
  onChange,
  startIndex = 0,
  visible = 2,
  children,
  ...rest
}) {
  const boxRef = useRef(null)
  const [embla, setEmbla] = useState(null)
  const [index, setIndex] = useState(startIndex)
  const [isMounted, setMounted] = useState(false)

  useUniversalEffect(() => {
    if (isMounted) {
      const instance = EmblaCarousel(boxRef.current, { startIndex })

      setEmbla(instance)
    }
  }, [isMounted, startIndex])

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!embla) return

    function handleSelect() {
      const currentIndex = embla.selectedScrollSnap()

      onChange(currentIndex)
      setIndex(currentIndex)
    }

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

    embla.on('select', handleSelect)
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      embla.off('select', handleSelect)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [embla])

  function handleClick(event) {
    if (embla.clickAllowed()) {
      const rect = event.currentTarget.getBoundingClientRect()
      const position = (event.clientX - rect.left) / rect.width

      if (position > 0.6) {
        embla.scrollNext()
      }

      if (position < 0.4) {
        embla.scrollPrev()
      }
    } else {
      event.preventDefault()
    }
  }

  const elements = useElements(children).map((child, slideIndex) => (
    <Box key={child.key} position='relative' flex='0 0 100%'>
      {inRange(index, slideIndex, visible) ? child : null}
    </Box>
  ))

  return (
    <Box
      ref={boxRef}
      onClick={handleClick}
      position='absolute'
      height='100%'
      width='100%'
    >
      <Flex height='100%'>{isMounted ? elements : elements[startIndex]}</Flex>
    </Box>
  )
}

export { Slideshow }
