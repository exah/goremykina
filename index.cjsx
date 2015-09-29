NormalizeCSS = require 'normalize.css'

React = require 'react'
ReactDOM = require 'react-dom'
{ Router, Route, IndexRoute } = require 'react-router'

App = require './components/app/app'
Gallery = require './components/gallery/gallery'
About = require './components/about'

ReactDOM.render (
	<Router>
		<Route path="/" component={App}>
			<IndexRoute component={Gallery} />
			<Route path="/gallery" component={Gallery} />
			<Route path="/about" component={About} />
		</Route>
	</Router>
), document.getElementById('IrinaGoremykina')
