React = require 'react'
Article = require "../../components/article/article"
example_db = require "../../assets/example_db"
css = require "./about.css"

module.exports = class About extends React.Component
  style: {
    'textAlign': 'left'
    'paddingLeft': 'calc(250px - 0.7em)'
    'maxWidth': '650px'
  }

  render: ->
    <div className="app-content about" ref="about">
      <Article
        text={example_db.about}
        style={@style} />
    </div>
