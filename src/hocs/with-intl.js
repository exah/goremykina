import { compile as getPath } from 'path-to-regexp'
import { compose, withPropsOnChange, withProps } from 'recompose'
import { injectIntl } from 'react-intl'
import { ALT_LANG } from '../constants'

const withPropsOnLangChange = (callback) => compose(
  injectIntl,
  withProps(({ intl }) => ({ lang: intl.locale, langAlt: ALT_LANG[intl.locale] })),
  withPropsOnChange(
    (prevProps, nextProps) => prevProps.lang !== nextProps.lang,
    callback
  )
)

const langLink = (lang) => (path, params) => getPath(path)({ lang, ...params })

const withIntl = withPropsOnLangChange(({
  intl,
  lang,
  langAlt
}) => ({
  _t: (id, data) => intl.formatMessage({ id }, data),
  _link: langLink(lang),
  _linkAlt: langLink(langAlt)
}))

export {
  withPropsOnLangChange,
  withIntl
}
