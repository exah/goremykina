import { useContext } from 'react'
import { IntlContext } from '../contexts'

export function useIntl() {
  return useContext(IntlContext)
}
