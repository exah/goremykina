import React from 'react'
import { Text } from 'pss-components'
import { toArr } from '@exah/utils'

export const createApi = (baseUrl = '') => {
  const api = (url, options) => global.fetch(baseUrl + url, options).then((res) => {
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

export const renderMarkdown = (src = '') =>
  src.split('\n\n').map((children, index) => (
    <Text key={index} as='p' mgb={2}>
      {children}
    </Text>
  ))

export const getIndentation = (str) => {
  const match = str.match(/^[ \t]*(?=\S)/gm)
  return match ? Math.min(...match.map(x => x.length)) : 0
}

export const dedent = (input, ...values) => {
  const indentation = getIndentation(input.join(''))
  const joined = input.map((str, i) => str + (toArr(values[i]).join(''))).join('')

  if (indentation === 0) {
    return joined
  }

  return joined.replace(new RegExp(`^[ \\t]{${indentation}}`, 'gm'), '').trim() + '\n'
}
