import React from 'react'
import { withData } from 'react-universal-data'

const Home = ({ data, isLoading }) => (
  <div>
    {isLoading ? 'Loading...' : `Home: ${data}`}
  </div>
)

export default withData(
  (props) => new Promise((resolve) =>
    setTimeout(() => resolve({ data: 'ok' }), 200)
  ),
  (prev, next) =>
    prev.match.params.lang !== next.match.params.lang ||
    prev.match.params.pictureName !== next.match.params.pictureName
)(Home)
