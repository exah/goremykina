import { compile as getPath } from 'path-to-regexp'
import { compose, withPropsOnChange, withProps } from 'recompose'
import { injectIntl } from 'react-intl'
import { ALT_LANG } from '../constants'

const withPropsOnLangChange = (callback) => compose(
  injectIntl,
  withProps(({ intl, lang }) => ({
    lang: lang || intl.locale,
    langAlt: ALT_LANG[lang || intl.locale]
  })),
  withPropsOnChange(
    (prevProps, nextProps) => prevProps.lang !== nextProps.lang,
    callback
  )
)

const withIntl = withPropsOnLangChange(({
  intl,
  lang
}) => ({
  _t: (id, data) => intl.formatMessage({ id }, data),
  _link: (path, params) => getPath(path)({ lang, ...params })
}))

export {
  withPropsOnLangChange,
  withIntl
}
