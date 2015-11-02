React = require 'react'
Article = require "../../components/article"
store = require "../../assets/example_db"
require "./index.css"

module.exports = class About extends React.Component
  style: {
    'textAlign': 'left'
    'paddingLeft': 'calc(250px - 0.7em)'
    'maxWidth': '650px'
  }

  render: ->
    <div className="app-content about" ref="about">
      <Article
        text={store.about}
        style={@style} />
    </div>
