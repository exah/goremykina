NormalizeCSS = require 'normalize.css'

React = require 'react'
ReactDOM = require 'react-dom'
{ Router, Route, IndexRoute, Redirect } = require 'react-router'

App = require './components/app/app'
Gallery = require './pages/gallery/gallery'
About = require './pages/about/about'

ReactDOM.render (
  <Router>
    <Route path="/" component={App}>
      <IndexRoute component={Gallery} />
      <Redirect from="/" to="/gallery" />
      <Route path="/gallery" component={Gallery} />
      <Route path="/about" component={About} />
    </Route>
  </Router>
), document.getElementById('IrinaGoremykina')
