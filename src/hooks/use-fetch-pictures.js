import { useCallback } from 'react'
import { useFetchData } from 'react-universal-data'
import { fetchPicturs } from '../api'
import { useIntl } from './use-intl'

export function useFetchPictures() {
  const { lang } = useIntl()

  return useFetchData(
    useCallback(() => fetchPicturs({ lang }), [lang]),
    'pictures'
  )
}
