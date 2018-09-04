import React from 'react'
import remark from 'remark'
import reactRenderer from 'remark-react'
import { Text } from 'pss-components'

const identity = (val) => val
const toArray = (src) => src == null ? [] : [].concat(src)

const markdown = remark().use(reactRenderer, {
  remarkReactComponents: {
    p: (props) => <Text comp='p' mgb={2} {...props} />
  }
})

const renderMarkdown = (src = '') =>
  markdown.processSync(src).contents

const getIndent = (lines) => {
  const lengths = lines
    .filter(line => line.trim().length !== 0)
    .map((str) => str.length - str.trimLeft().length)

  const result = Math.min(...lengths)

  return result === Infinity ? 0 : result
}

const dedent = (strings, ...values) => {
  const stripIndent = getIndent(strings.join('').split('\n'))

  const parts = []

  for (let stringIndex = 0; stringIndex < strings.length; stringIndex++) {
    const trimmed = strings[stringIndex]
      .split('\n')
      .map((line, lineIndex) => stringIndex === 0 || lineIndex > 0 ? line.substring(stripIndent) : line)

    parts.push(trimmed.join('\n'))

    if (stringIndex < values.length) {
      const indent = getIndent(trimmed.slice(1))

      parts.push(
        toArray(values[stringIndex]).join('\n' + ''.padStart(indent))
      )
    }
  }

  return parts.join('').trim()
}

function listen (target, eventName, fn, ...options) {
  target.addEventListener(eventName, fn, ...options)
  return () => target.removeEventListener(eventName, fn, ...options)
}

const throttle = (fn = identity) => {
  let wait

  return function (...args) {
    if (wait) return
    wait = true

    window.requestAnimationFrame(() => {
      wait = false
      fn.apply(this, args)
    })
  }
}

export {
  renderMarkdown,
  dedent,
  listen,
  throttle
}
