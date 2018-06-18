import React from 'react'
import { withData } from '../hocs/with-data'

const About = ({ data }) => (
  <div>
    About
  </div>
)

export default withData()(About)
