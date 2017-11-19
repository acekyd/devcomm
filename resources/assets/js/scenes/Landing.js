import React, { Component } from 'react';
import { Navbar, Jumbotron, StateGrid } from '../components';
import { constants } from '../config';

export default class Landing extends Component {
	render() {
		return (
			<div id='landing'>
				<Navbar/>
				<Jumbotron text={constants.JUMBOTRON_TEXT}/>
				<div className='state-grid-container'>
					<StateGrid/>
				</div>
			</div>
		);
	}
}