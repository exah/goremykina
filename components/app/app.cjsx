React = require 'react'
require './app.css'
Gallery = require '../gallery/gallery.cjsx'

module.exports = React.createClass
	displayName: 'App'
	render: ->
		<div>
			Hello World!
			<Gallery />
		</div>
