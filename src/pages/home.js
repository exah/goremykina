import React from 'react'
import { withData } from '../hocs/with-data'

const Home = ({ data }) => (
  <div>
    Home: {data}
  </div>
)

export default withData((props) => Promise.resolve({ data: 'ok' }))(Home)
