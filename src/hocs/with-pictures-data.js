import React, { useCallback } from 'react'
import { useFetchData } from 'react-universal-data'
import { fetchPicturs } from '../api'

const withPicturesData = (Comp) =>
  function PicturesData(props) {
    const { lang, slug } = props.match.params
    const { result = [], isLoading } = useFetchData(
      useCallback(() => fetchPicturs({ lang }), [lang]),
      'pictures'
    )

    const active =
      slug == null ? result[0] : result.find((p) => p.slug === slug)

    return (
      <Comp
        {...props}
        isLoading={isLoading}
        pictures={result}
        activePicture={active}
      />
    )
  }

export { withPicturesData }
