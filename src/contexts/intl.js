import React, { PureComponent, createContext } from 'react'
import { compile as compilePath } from 'path-to-regexp'
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
  pathCache = {}
  getMessage = (id, langOpt) => {
    const lang = langOpt || this.props.lang
    const messages = this.props.messages[lang]

    if (messages == null) {
      console.warn(`Please provide messages for lang='${lang}'`)
      return id
    }

    const text = messages[id]

    if (text == null) {
      console.warn(`No message for '${id}' for lang='${lang}'`)
      return id
    }

    return text.toString()
  }
  getLink = (path, data, langOpt) => {
    const lang = langOpt || this.props.lang

    const getPath = this.pathCache[path] = this.pathCache[path] || compilePath(path)
    return getPath({ lang, ...data })
  }
  getHref = (...args) => this.props.siteUrl + this.getLink(...args)
  render () {
    const { lang, langAlt, children } = this.props

    const data = {
      lang,
      langAlt,
      t: this.getMessage,
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
