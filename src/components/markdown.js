import React, { useMemo } from 'react'
import { Box, Text } from 'pss-components'

const P = (props) => <Text as='p' mb={2} variant='text' {...props} />
const H1 = (props) => <P as='h1' variant='title' {...props} />
const HR = () => <Box as='hr' height='1px' bg='gray' my={2} />

const COMP_PATTERNS = [
  [H1, /^(#\s)/g],
  [HR, /^---/g]
]

const renderMarkdown = (input) =>
  input
    .trim()
    .split('\n\n')
    .map((text, key) => {
      const trimmed = text.trim()
      const match = COMP_PATTERNS.find(([_, pattern]) => pattern.test(trimmed))

      if (match) {
        const [Comp, pattern] = match
        return <Comp key={key}>{trimmed.replace(pattern, '')}</Comp>
      }

      return <P key={key}>{trimmed}</P>
    })

export function Markdown({ value }) {
  return useMemo(() => renderMarkdown(value), [value])
}
