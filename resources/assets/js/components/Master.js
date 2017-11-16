import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router';

class Master extends Component {
  render(){
    return (
      <div className="container" id="landing">
        <div className='menu-container'>
          <div className='menu'>
            <div className='brand'>DevComm</div>
            <div className='links'>
              <a href="/register" className='register'>Join</a>
              <a href="/login" className='login'>Login</a>
              <a href="/promote" className='promote'>Promote</a>
            </div>
          </div>
        </div>

        <div className='header-container'>
          <div className='header'>
            <div className='logo'>
              <h2>A directory of techies passionate about Community.</h2>
            </div>
          </div>
        </div>

        <div className='state-grid-container'>
          <div className='state-grid'>
            <div className='state-grid-item'>
              <p>State</p>
              <p>Community members</p>
            </div>
            <div className='state-grid-item'>
              <p>State</p>
              <p>Community members</p>
            </div>
            <div className='state-grid-item'>
              <p>State</p>
              <p>Community members</p>
            </div>
            <div className='state-grid-item'>
              <p>State</p>
              <p>Community members</p>
            </div>
            <div className='state-grid-item'>
              <p>State</p>
              <p>Community members</p>
            </div>
            <div className='state-grid-item'>
              <p>State</p>
              <p>Community members</p>
            </div>
            <div className='state-grid-item'>
              <p>State</p>
              <p>Community members</p>
            </div>
            <div className='state-grid-item'>
              <p>State</p>
              <p>Community members</p>
            </div>
          </div>
        </div>
        
        
        <div>
            {this.props.children}
        </div>
      </div>
    )
  }
}
export default Master;