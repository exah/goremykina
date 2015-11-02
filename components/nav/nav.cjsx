React = require 'react'
{ Link, PropTypes, IndexLink } = require 'react-router'
css = require './nav.css'

module.exports = class Nav extends React.Component
  render: ->
    <nav className="nav" role="navigation">
      {@props.navLinks.map (l, i) ->
        <Link className="nav-item"
              to="/#{ l.url }"
              activeClassName="is-active"
              onlyActiveOnIndex={l.index}
              key={i}> { l.name } </Link>
      }
      <span className="nav-item">Записи</span>
      <span className="nav-item">Контакты</span>
    { ###
      <a className="nav-item" href="mailto:сontact@goremykina.com">сontact@goremykina.com</a>
      <a className="nav-item" href="tel:+79057745858">+79057745858</a>
      ### }
    </nav>

Nav.contextTypes = { history: PropTypes.history }
