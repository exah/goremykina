import React, { createContext, useMemo } from 'react'
import { generatePath } from 'react-router'
import { DEFAULT_LANG } from '../constants'

const IntlContext = createContext(null)

function IntlProvider({
  lang = DEFAULT_LANG,
  messages = {},
  baseUrl = '',
  ...rest
}) {
  const value = useMemo(() => {
    const getMessages = (id, langOpt = lang) => {
      const fallback = [].concat(id)
      const langMessages = messages[langOpt]

      if (langMessages == null) {
        console.warn(`Please provide 'messages' for lang='${langOpt}'`)
        return fallback
      }

      const message = langMessages[id]

      if (message == null) {
        console.warn(`No '${id}' message for lang='${langOpt}'`)
        return fallback
      }

      return [].concat(message)
    }

    const getLink = (path, params, langOpt = lang) =>
      generatePath(path, { lang: langOpt, ...params })

    const getHref = (...args) => baseUrl + getLink(...args)

    return {
      t: getMessages,
      link: getLink,
      href: getHref,
      lang
    }
  }, [lang, messages])

  return <IntlContext.Provider value={value} {...rest} />
}

export { IntlProvider, IntlContext }
