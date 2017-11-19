import React, { Component } from 'react';
import { constants } from '../config';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
	renderOnHome() {
		if (this.props.renderOnHome == true) {
			return (
				<div className="links">
					<a href="/promote">Promote</a>
					<ul className="nav navbar-nav navbar-right">
						<li className="dropdown">
							<a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false" aria-haspopup="true">
								{this.props.name} <span className="caret"></span>
							</a>

							<ul className="dropdown-menu">
								<li>
									<a href="/">Edit Profile</a>
								</li>
								<li>
									<a href="/">Logout</a>
								</li>
							</ul>
						</li>
					</ul>
				</div>
			);
		} else {
			return (
				<div className="links">
					<Link to="/register" className='register'>Join</Link>
					<Link to="/login" className='login'>Login</Link>
					<Link to="/promote" className='promote'>Promote</Link>
				</div>
			)
		}
	}

	render() {
		return (
			<div className='menu-container'>
				<div className='menu'>
					<Link to="/" className='brand'>{constants.APP_NAME}</Link>
					{this.renderOnHome()}
				</div>
			</div>
		);
	}
}