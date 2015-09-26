React = require 'react'
ReactDOM = require 'react-dom'
{ Router, Route, Link, IndexRoute } = require 'react-router'
App = require './components/app/app'
Test = require './components/test'
Gallery = require './components/gallery/gallery.cjsx'

ReactDOM.render (
	<Router>
		<Route path="/" component={App}>
			<IndexRoute component={Gallery} />
			<Route path="/gallery" component={Gallery} />
			<Route path="/test" component={Test} />
		</Route>
	</Router>), document.getElementById('App')
