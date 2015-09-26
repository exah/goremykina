React = require 'react'
Art = require '../art/art'
example_db = require '../../assets/example_db'
require './gallery.css'

module.exports = React.createClass
	displayName: 'Gallery'
	render: ->
		<div className="gallery">
			{example_db.art.map((art, i) -> <Art {... art} key={i} /> )}
		</div>
