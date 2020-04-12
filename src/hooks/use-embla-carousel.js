import { useRef, useEffect, useCallback } from 'react'
import EmblaCarousel from 'embla-carousel'

export function useEmblaCarousel(
  elementRef,
  {
    // https://github.com/davidcetinkaya/embla-carousel#options
    align = 'center',
    containerSelector = '*',
    containScroll = false,
    dragFree = false,
    draggable = true,
    draggableClass = 'is-draggable',
    draggingClass = 'is-dragging',
    loop = false,
    selectedClass = 'is-selected',
    slidesToScroll = 1,
    speed = 10,
    startIndex = 0
  } = {}
) {
  const ref = useRef(null)

  useEffect(() => {
    const element = elementRef.current

    if (element != null) {
      ref.current = EmblaCarousel(element, {
        align,
        containerSelector,
        slidesToScroll,
        containScroll,
        draggable,
        dragFree,
        loop,
        speed,
        startIndex,
        selectedClass,
        draggableClass,
        draggingClass
      })

      return () => {
        ref.current.destroy()
        ref.current = null
      }
    }
  }, [
    elementRef,
    align,
    containerSelector,
    slidesToScroll,
    containScroll,
    draggable,
    dragFree,
    loop,
    speed,
    startIndex,
    selectedClass,
    draggableClass,
    draggingClass
  ])

  return useCallback(() => ref.current, [ref])
}
