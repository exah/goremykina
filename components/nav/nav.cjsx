React = require 'react'
{ Link, PropTypes } = require 'react-router'
css = require './nav.css'

module.exports = class Nav extends React.Component
	render: ->
		<nav className="nav" role="navigation">
			{@props.navLinks.map (l, i) =>
				active = if @context.history.isActive("/#{ l.url }") then "is-active" else ""
				<Link className="nav-item #{ active }"
							to="/#{ l.url }"
							key={i}>
							{ l.name }
				</Link>
			}
		{	###
			<a className="nav-item" href="mailto:сontact@goremykina.com">сontact@goremykina.com</a>
			<a className="nav-item" href="tel:+79057745858">+79057745858</a>
			### }
		</nav>

Nav.contextTypes = { history: PropTypes.history }
