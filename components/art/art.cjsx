React = require 'react'
# ReactDOM = require 'react-dom'
# require 'waypoints/lib/noframework.waypoints.js'
# Velocity = require 'velocity-animate'
css = require './art.css'

module.exports = class Art extends React.Component
	# style: {
	# 	opacity: 0
	# 	transform: 'translateY(-10px)'
	# }

	# componentDidMount: ->
	# 	$$ = (selector, context) ->
	# 		context = context || document;
	# 		elements = context.querySelectorAll(selector)
	# 		Array.prototype.slice.call(elements)

	# 	$$('.art').forEach (el) ->
	# 		waypoint = new Waypoint({
	# 		  element: el
	# 		  offset: '50%'
	# 		  handler: () ->
	# 		    Velocity(@element, {
	# 		    	opacity: 1
	# 		    	translateY: '0px'
	# 		    }, 400)
	# 		})

	render: ->
		<div className="art" style={@style}>
			<a href={@props.src} target="_blank">
				<img 	className="art-image"
							src={@props.tmb['1x']}
							srcSet="#{ @props.tmb['2x'] } 2x"
							alt={@props.name} />
			</a>
		</div>
