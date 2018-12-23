import React, { PureComponent, createContext } from 'react'
import { compile as compilePath } from 'path-to-regexp'
import { toArr } from '@exah/utils'
import { DEFAULT_LANG, ALT_LANG } from '../constants'

const INITIAL = {
  lang: DEFAULT_LANG,
  langAlt: ALT_LANG[DEFAULT_LANG],
  siteUrl: '',
  messages: {}
}

const { Provider, Consumer } = createContext(INITIAL)

class IntlProvider extends PureComponent {
  static defaultProps = INITIAL
  compiledPaths = {}
  getMessages = (id, langOpt) => {
    const lang = langOpt || this.props.lang
    const messages = this.props.messages[lang]
    const fallback = toArr(id)

    if (messages == null) {
      console.warn(`Please provide 'messages' for lang='${lang}'`)
      return fallback
    }

    const value = messages[id]

    if (value == null) {
      console.warn(`No '${id}' message for lang='${lang}'`)
      return fallback
    }

    return toArr(value)
  }
  getLink = (path, data, langOpt) => {
    const lang = langOpt || this.props.lang

    const getPath = this.compiledPaths[path] = (this.compiledPaths[path] || compilePath(path))
    return getPath({ lang, ...data })
  }
  getHref = (...args) => this.props.siteUrl + this.getLink(...args)
  render () {
    const { lang, langAlt, children } = this.props

    const data = {
      lang,
      langAlt,
      t: this.getMessages,
      link: this.getLink,
      href: this.getHref
    }

    return (
      <Provider value={data}>
        {children}
      </Provider>
    )
  }
}

export {
  IntlProvider,
  Consumer as IntlConsumer
}
