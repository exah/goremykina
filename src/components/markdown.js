import React, { useMemo } from 'react'
import { Text } from 'pss-components'

const P = (props) => <Text as='p' mb={2} variant='text' {...props} />
const H1 = (props) => <P as='h1' variant='title' {...props} />

const COMP_PATTERNS = [[H1, /^(#\s)/g]]

const renderMarkdown = (input) =>
  input
    .trim()
    .split('\n\n')
    .map((text, key) => {
      const match = COMP_PATTERNS.find(([_, pattern]) => pattern.test(text))

      if (match) {
        const [Comp, pattern] = match
        return <Comp key={key}>{text.replace(pattern, '')}</Comp>
      }

      return <P key={key}>{text}</P>
    })

export function Markdown({ value }) {
  return useMemo(() => renderMarkdown(value), [value])
}
