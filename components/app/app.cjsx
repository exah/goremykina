React = require 'react'
{ Link } = require 'react-router'
Nav = require '../nav/nav'
css = require './app.css'

navLinks = [
	{
		url: "gallery"
		name: "Картины"
		index: true
	}
	{
		url: "about"
		name: "Об Ирине"
		index: false
	}
]

module.exports = class App extends React.Component
	render: ->
		<div className="app">
			<header className="app-header header">
				<div className="logo">
					<Link to="/">
						<svg width="110" height="83" viewBox="0 0 110 83" xmlns="http://www.w3.org/2000/svg">
							<path d="M106.93.792s-11.154 9.976-36.476 9.371c-25.322-.605-61.874-5.744-64.587 16.098 0 9.119 13.42 9.991 15.098 10.153-16.179 13.15-29.031 34.133-14.881 44.305 11.391 8.189 29.259-6.977 43.323-24.692 7.779.927 20.243-9.183 20.243-9.183l-.101-2.519s-12.51 7.86-16.618 7.255c5.706-7.36 11.418-15.006 15.336-19.272 9.797-11.084 26.402-20.091 7.455-9.863-10.834 5.848-16.881 15.289-26.381 28.516-8.23-1.648 5.586-20.693 5.586-20.693s-2.612-.302-4.973 1.209c-5.633 3.606-11.053 19.956-15.977 19.802-6.431-.202 7.989-21.363 7.989-21.363s-3.627-1.897-14.376 1.905c-4.949 1.458-14.379.645-15.318-2.308-1.628-5.124-.552-14.779 58.474-14.054 22.454-.948 20.729-1.799 30.749-7.255 11.611-6.322 9.113-9.885 5.435-7.41zm-76.224 34.208s-10.378 14.461-6.074 21.44c4.264 6.914 15.711-10.53 15.711-10.53s-.873 7.758 3.657 9.108c0 0-2.658 3.459-4.142 5.192-14.842 17.342-24.191 21.065-30.266 15.213-14.842-14.299 21.115-40.423 21.115-40.423z" fill="currentColor"/>
						</svg>
					</Link>
				</div>
			</header>
			<Nav navLinks={navLinks} />
			{@props.children}
		</div>
