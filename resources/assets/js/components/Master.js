import React, { Component } from 'react';
import Navbar from './Navbar';
import Jumbotron from './Jumbotron';
import StateGrid from './state-grid/StateGrid';
import { constants } from '../config';

export default class Master extends Component {
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