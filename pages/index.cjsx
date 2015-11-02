React = require 'react'
{ Link } = require 'react-router'

Header = require '../components/header'
Nav = require '../components/nav'
require './index.css'

navLinks = [
  {
    url: ""
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
      <Header />
      <Nav navLinks={navLinks} />
      {@props.children}
    </div>
