import React, { Component } from 'react';
import { constants } from '../config';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

	async componentWillMount() {
		try {
			let config = '';

			if(localStorage.getItem('config') == null)
			{
				let response = await axios.get('/api/config');
				let responseJson = response.data;
				config = JSON.stringify(responseJson);
				localStorage.setItem('config', config);
			}
			else config = localStorage.getItem('config');
			
		} catch (error) {
			console.error(`Error thrown in NavBar Config component: ${error}`);
		}
	}

	renderOnHome() {
		let user = JSON.parse(localStorage.getItem('user'));
		if (user != null) {
			return (
				<div className="links">
					<Link to="/promote">Promote</Link>
					<ul className="nav navbar-nav navbar-right">
						<li className="dropdown">
							<a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false" aria-haspopup="true">
								{user.name} <span className="caret"></span>
							</a>

							<ul className="dropdown-menu">
								<li>
									<Link to="/profile/edit">Edit Profile</Link>
								</li>
								{/* <li>
									<Link to="/logout">Logout</Link>
								</li> */}
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