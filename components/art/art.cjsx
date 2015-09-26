React = require 'react'
css = require './art.css'

module.exports = React.createClass
	displayName: 'Art'
	render: ->
		<div className="art">
			<img 	className="art-image"
						src={@props.image.tmb['1x']}
						srcSet="#{ @props.image.tmb['2x'] } 2x"
						alt={@props.name} />
		</div>
