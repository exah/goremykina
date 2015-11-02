React = require 'react'
Marked = require 'marked'
css = require './article.css'

module.exports = class About extends React.Component
  renderMD: (text) ->
    markup = Marked(text, sanitize: true)
    { __html: markup }
  render: ->
    <article
        className="article"
        style={@props.style}
        lang="ru"
        dangerouslySetInnerHTML={@renderMD(@props.text)} />
