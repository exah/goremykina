React = require 'react'

Art = require '../../components/art/art'
Article = require "../../components/article/article"

css = require './gallery.css'
example_db = require '../../assets/example_db'
# @todo: PhotoSwipe component

module.exports = class Gallery extends React.Component
  render: ->
    <div className="app-content">
      <Article text={example_db.anons} />
      <div className="gallery">
        {example_db.art.map((art, i) -> <Art {... art} key={i} /> )}
      </div>
    </div>
