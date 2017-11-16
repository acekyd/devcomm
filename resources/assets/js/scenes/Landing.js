import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Jumbotron from '../components/Jumbotron';
import { StateGrid } from '../components/state-grid';
import { constants } from '../config';

export default class Landing extends Component {
	render() {
		return (
			<div className='container' id='landing'>
				<Navbar/>
				<Jumbotron text={constants.JUMBOTRON_TEXT}/>
				<div className='state-grid-container'>
					<StateGrid/>
				</div>
			</div>
		);
	}
}