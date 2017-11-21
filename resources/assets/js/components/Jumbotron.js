import React, { Component } from 'react';
import { constants } from '../config';
import { Link } from 'react-router-dom';

export default class Jumbotron extends Component {
	renderOnHome() {
		if (this.props.renderOnHome == true) {
			return (
				<div className='cta'>
					<Link to="/register" className="button join">{constants.SIGNUP_CTA}</Link>
					<Link to="/promote" className="button promote">{constants.PROMOTE_CTA}</Link>
				</div>
			);
		} else return null
	}

	render() {
		return (
			<div className='header-container'>
				<div className='header'>
					<div className='logo'>
						<h2>{this.props.text}</h2>
					</div>
					{this.renderOnHome()}
				</div>
			</div>
		);
	}
}