import { useCallback } from 'react'
import { useFetchData } from 'react-universal-data'
import { fetchPage } from '../api'
import { useIntl } from './use-intl'

const TTL = 1000 * 60 * 5

export function useFetchPage(slug) {
  const { lang } = useIntl()

  return useFetchData(
    useCallback(() => fetchPage({ lang, slug }), [lang, slug]),
    `page-${slug}-${lang}`,
    TTL
  )
}
