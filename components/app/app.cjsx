React = require 'react'
{ Router, Route, Link, IndexRoute } = require 'react-router'
require './app.css'

module.exports = React.createClass
	displayName: 'App'
	render: ->
		<div className="app">
			<header className="logo">
				<a href="/"><img src="assets/media/logo.svg" alt="" /></a>
			</header>
			<nav className="app-nav"> <Link to="/gallery">Gallery</Link> <Link to="/test">Test</Link> </nav>
			{@props.children}
		</div>
