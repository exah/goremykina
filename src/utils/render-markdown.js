import React from 'react'
import remark from 'remark'
import reactRenderer from 'remark-react'
import { Text } from 'pss-components'

const markdown = remark().use(reactRenderer, {
  remarkReactComponents: {
    p: (props) => <Text comp='p' mgb {...props} />
  }
})

const renderMarkdown = (src = '') =>
  markdown.processSync(src).contents

export {
  renderMarkdown
}
