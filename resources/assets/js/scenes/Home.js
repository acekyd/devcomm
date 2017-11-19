import React, { Component } from 'react';
import { Navbar, Jumbotron } from '../components';
import { constants } from '../config';

export default class Home extends Component {
	constructor(props) {
		super(props);
		this.state = { name:'Victor' };
	}

	render() {
		return (
			<div id='landing'>
				<Navbar renderOnHome={true} name={this.state.name}/>
				<Jumbotron text={constants.JUMBOTRON_TEXT}/>
			</div>
		);
	}
}