React = require 'react'

module.exports = React.createClass
	displayName: 'Test'
	style: {
		'text-align': 'center'
	}
	render: ->
		<h1 className="test" style={@style}> This is test </h1>
