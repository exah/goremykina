import React from 'react'
import { Box, Text } from 'pss-components'
import { withData } from 'react-universal-data'

const Home = ({ data, isLoading }) => (
  <Box pdy>
    <Text>
      {isLoading ? 'Loading...' : `Home: ${data}`}
    </Text>
  </Box>
)

export default withData(
  (props) => new Promise((resolve) =>
    setTimeout(() => resolve({ data: 'ok' }), 200)
  ),
  (prev, next) =>
    prev.match.params.lang !== next.match.params.lang ||
    prev.match.params.pictureName !== next.match.params.pictureName
)(Home)
