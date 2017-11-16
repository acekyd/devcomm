import React from 'react';
import { constants } from '../config';
import { Link } from 'react-router-dom';

export default function AuthNavbar(props) {
	return (
		<nav className="navbar navbar-default navbar-static-top">
			<div className="container">
				<div className="navbar-header">
					<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#app-navbar-collapse" aria-expanded="false">
						<span className="sr-only">Toggle Navigation</span>
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
					</button>

					<Link className="navbar-brand" to="/">{constants.APP_NAME}</Link>
				</div>
			</div>
		</nav>
	);
}