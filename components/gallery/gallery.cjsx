React = require 'react'
Art = require '../art/art'
require './gallery.css'

module.exports = React.createClass
	displayName: 'Gallery'
	render: ->
		<div className="gallery">
			<Art />
		</div>
