import React from 'react'
import { withData } from 'react-get-app-data'

const Home = ({ data, isLoading }) => (
  <div>
    {isLoading ? 'Loading...' : `Home: ${data}`}
  </div>
)

export default withData((props) => new Promise((resolve) =>
  setTimeout(() => resolve({ data: 'ok' }), 200)
))(Home)
