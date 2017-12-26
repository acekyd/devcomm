import React, { Component } from 'react';
import { constants } from '../config';
import { Link } from 'react-router-dom';

export default class Jumbotron extends Component {
	constructor(props) {
		super(props);
		this.handleSearchChange = this.handleSearchChange.bind(this);
	}

	renderOnHome() {
		// if (this.props.renderOnHome == true) {
			return (
				// <div className='cta'>
				// 	<Link to="/register" className="button join">{constants.SIGNUP_CTA}</Link>
				// 	<Link to="/promote" className="button promote">{constants.PROMOTE_CTA}</Link>
				// </div>
				<div className='more-details'>
					<p>Connect and network with people from your immediate community and have access to opportunities and events.</p>
				</div>
			);
		// } else return null
	}

	handleSearchChange(e) {
		const target = e.target;
		const value = target.value;
		this.props.setKeyword(target.value);
	}

	renderOnSearch() {
		if(this.props.search == true)
		{
			return (
				<div className='search'>
					<input type="text" name="search" className='form-control' placeholder="Find community member" value={this.props.searchKeyword} onChange={this.handleSearchChange}/>
				</div>
			);
		}
	}

	render() {
		return (
			<div className='header-container'>
				<div className='header'>
					<div className='jumbo-text'>
						<h2>{this.props.text}</h2>
						{this.renderOnHome()}
						{this.renderOnSearch()}
					</div>
				</div>
			</div>
		);
	}
}