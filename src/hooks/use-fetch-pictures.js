import { useCallback } from 'react'
import { useFetchData } from 'react-universal-data'
import { fetchPicturs } from '../api'
import { useIntl } from './use-intl'

const TTL = 1000 * 60 * 5

export function useFetchPictures() {
  const { lang } = useIntl()

  return useFetchData(
    useCallback(() => fetchPicturs({ lang }), [lang]),
    'pictures',
    TTL
  )
}
