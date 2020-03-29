import React, { useCallback } from 'react'
import { useFetchData } from 'react-universal-data'
import { fetchPage } from '../api'

const withPageData = (slug) => (Comp) =>
  function PageData(props) {
    const { lang } = props.match.params
    const { result, isLoading } = useFetchData(
      useCallback(() => fetchPage({ lang, slug }), [lang, slug]),
      `page-${slug}`
    )

    return <Comp {...props} isLoading={isLoading} {...result} />
  }

export { withPageData }
