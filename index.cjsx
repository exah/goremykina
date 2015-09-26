NormalizeCSS = require 'normalize.css'

React = require 'react'
ReactDOM = require 'react-dom'
{ Router, Route, IndexRoute } = require 'react-router'

App = require './components/app/app'
Gallery = require './components/gallery/gallery'
Test = require './components/test'

ReactDOM.render (
	<Router>
		<Route path="/" component={App}>
			<IndexRoute component={Gallery} />
			<Route path="/gallery" component={Gallery} />
			<Route path="/test" component={Test} />
		</Route>
	</Router>), document.getElementById('App')
