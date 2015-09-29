React = require 'react'
Art = require '../art/art'
css = require './gallery.css'
example_db = require '../../assets/example_db'
# @todo: PhotoSwipe component

module.exports = class Gallery extends React.Component
	render: ->
		<div className="app-content">
			<article className="article">
				<p>{example_db.anons}</p>
			</article>
			<div className="gallery">
				{example_db.art.map((art, i) -> <Art {... art} key={i} /> )}
			</div>
		</div>
