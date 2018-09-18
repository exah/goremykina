import React, { PureComponent, createContext } from 'react'
import { compile as compilePath } from 'path-to-regexp'
import { DEFAULT_LANG } from '../constants'

const INITIAL = {
  lang: DEFAULT_LANG,
  messages: {}
}

const { Provider, Consumer } = createContext(INITIAL)

class IntlProvider extends PureComponent {
  static defaultProps = INITIAL
  pathCache = {}
  getMessage = (id) => {
    const { lang } = this.props
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
  getLink = (path, data) => {
    const { lang } = this.props

    const getPath = this.pathCache[path] = this.pathCache[path] || compilePath(path)
    return getPath({ lang, ...data })
  }
  render () {
    const { lang, children } = this.props

    const data = {
      lang,
      t: this.getMessage,
      link: this.getLink
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
