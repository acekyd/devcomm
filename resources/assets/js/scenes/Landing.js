import React, { Component } from 'react';
import { Navbar, Jumbotron, StateGrid } from '../components';
import { constants } from '../config';
import { Redirect } from 'react-router-dom';

export default class Landing extends Component {
	render() {
		if (localStorage.getItem(constants.ACCESS_TOKEN_LS)) {
			return <Redirect to='/home'/>
		} else {
			return (
				<div id='landing'>
					<Navbar/>
					<Jumbotron text={constants.JUMBOTRON_TEXT} renderOnHome={true}/>
					<div className='state-grid-container'>
						<StateGrid/>
					</div>
				</div>
			);
		}
	}
}