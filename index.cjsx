React = require 'react'
{ render } = require 'react-dom'
{ Router, Route, IndexRoute, Redirect } = require 'react-router'

App = require './pages'
Gallery = require './pages/gallery'
About = require './pages/about'

require './index.css'

render (
  <Router>
    <Route path="/" component={App}>
      <IndexRoute component={Gallery} />
      <Redirect from="/" to="/gallery" />
      <Route path="/gallery" component={Gallery} />
      <Route path="/about" component={About} />
    </Route>
  </Router>
), document.getElementById('IrinaGoremykina')
