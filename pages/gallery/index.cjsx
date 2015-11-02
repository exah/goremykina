React = require 'react'

Art = require '../../components/art'
Article = require "../../components/article"

store = require '../../assets/example_db'
require './index.css'

module.exports = class Gallery extends React.Component
  render: ->
    <div className="app-content">
      <Article text={store.anons} />
      <div className="gallery">
        {store.art.map((art, i) -> <Art {... art} key={i} /> )}
      </div>
    </div>
