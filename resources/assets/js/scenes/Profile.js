import React, { Component } from 'react';
import { Navbar, Jumbotron, User, Authenticated } from '../components';
import { constants } from '../config';

export default class Profile extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const alias = this.props.match.params.page;
		return (
			<div id='landing'>
				<Authenticated />
				<Navbar renderOnHome={true}/>
				<Jumbotron text={constants.JUMBOTRON_TEXT}/>
				<User user={alias}/>
			</div>
		);
	}
}