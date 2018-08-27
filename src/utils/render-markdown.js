import React from 'react'
import remark from 'remark'
import reactRenderer from 'remark-react'
import { Box } from 'pss-components'

const markdown = remark().use(reactRenderer, {
  remarkReactComponents: {
    p: (props) => <Box comp='p' mgb {...props} />
  }
})

const renderMarkdown = (src = '') =>
  markdown.processSync(src).contents

export {
  renderMarkdown
}
