import React from 'react'
import { Text } from 'pss-components'
import { toArr, reduceObj } from '@exah/utils'

export const createApi = (baseUrl = '') => {
  const api = (url, options) =>
    global.fetch(baseUrl + url, options).then((res) => {
      if (res.status >= 200 && res.status < 300) {
        return res.json()
      }

      return res.json().then((data) => {
        throw Object.assign(new Error(res.statusText), { ...res, data })
      })
    })

  api.get = (input, options) => api(input, options)

  return api
}

const BLOCK_PATTERNS = {
  H1: /^(#\s)/
}

const COMPS = {
  H1: (props) => <Text as='h1' mgb={2} variant='title' {...props} />,
  default: (props) => <Text as='p' mgb={2} variant='text' {...props} />
}

const matchComp = (str) =>
  reduceObj(
    (acc, key, value) => {
      if (acc !== null) {
        return acc
      }

      if (value && value.test(str) && COMPS[key]) {
        return { Comp: COMPS[key], props: { children: str.replace(value, '') } }
      }

      return { Comp: COMPS.default, props: { children: str } }
    },
    null,
    BLOCK_PATTERNS
  )

export const renderMarkdown = (src = '') =>
  src
    .split('\n\n')
    .map((text) => matchComp(text))
    .map(({ Comp, props }, index) => <Comp key={index} {...props} />)

export const getIndentation = (str) => {
  const match = str.match(/^[ \t]*(?=\S)/gm)
  return match ? Math.min(...match.map((x) => x.length)) : 0
}

export const dedent = (input, ...values) => {
  const indentation = getIndentation(input.join(''))
  const joined = input.map((str, i) => str + toArr(values[i]).join('')).join('')

  if (indentation === 0) {
    return joined
  }

  return (
    joined.replace(new RegExp(`^[ \\t]{${indentation}}`, 'gm'), '').trim() +
    '\n'
  )
}

export const Noop = () => <>&nbsp;</>
export const join = (...arr) => arr.filter(Boolean).join(', ') || null
