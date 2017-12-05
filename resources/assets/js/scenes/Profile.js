import React, { Component } from 'react';
import { Navbar, Jumbotron, User } from '../components';
import { constants } from '../config';

export default class Profile extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div id='landing'>
				<Navbar renderOnHome={true}/>
				<Jumbotron text={constants.JUMBOTRON_TEXT}/>
				<User/>
			</div>
		);
	}
}