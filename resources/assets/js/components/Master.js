import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router';

class Master extends Component {
  render(){
    return (
      <div className="container">
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">DevComm</a>
            </div>
            <ul className="nav navbar-nav">
              <li className="active"><a href="#">Home</a></li>
              <li><a href="/login">Login</a></li>
              <li><a href="/register">Register</a></li>
              <li><a href="/promote">Promote</a></li>
            </ul>
          </div>
      </nav>
          <div>
              {this.props.children}
          </div>
      </div>
    )
  }
}
export default Master;