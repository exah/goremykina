React = require 'react'
ReactDOM = require 'react-dom'
ReactTransitionGroup = require 'react-addons-transition-group'
Marked = require 'marked'
example_db = require '../assets/example_db'

module.exports = class About extends React.Component
  style: {
    'textAlign': 'left'
    'paddingLeft': 'calc(250px - 0.7em)'
    'maxWidth': '650px'
  }
  renderMD: (text) ->
    markup = Marked(text, sanitize: true)
    { __html: markup }
  render: ->
    <div className="app-content about">
      <article
          className="article"
          style={@style}
          ref="about"
          lang="ru"
          dangerouslySetInnerHTML={@renderMD(example_db.about)} />
    </div>
