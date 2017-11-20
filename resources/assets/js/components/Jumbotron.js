import React, { Component } from 'react';
import { constants } from '../config';

export default class Jumbotron extends Component {
	renderOnHome() {
		if (this.props.renderOnHome == true) {
			return (
				<div className='cta'>
					<a href="/register" className="button join">{constants.SIGNUP_CTA}</a>
					<a href="/promote" className="button promote">{constants.PROMOTE_CTA}</a>
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