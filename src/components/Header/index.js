import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">珠峰SSR</a>
          </div>
          <div id="navbar" className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/counter">Counter</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
