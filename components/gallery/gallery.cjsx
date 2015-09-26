React = require 'react'
Art = require '../art/art'
css = require './gallery.css'
example_db = require '../../assets/example_db'

module.exports = React.createClass
	displayName: 'Gallery'
	render: ->
		<div className="gallery">
			{example_db.art.map((art, i) -> <Art {... art} key={i} /> )}
		</div>
