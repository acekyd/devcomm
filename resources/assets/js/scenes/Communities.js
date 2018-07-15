import React, { Component } from 'react';
import { Navbar, Jumbotron, CommunityGrid } from '../components';
import { constants } from '../config';
import { Redirect } from 'react-router-dom';

export default class Communities extends Component {
	render() {
			return (
				<div id='landing'>
					<Navbar/>
					<Jumbotron text={constants.JUMBOTRON_TEXT} renderOnHome={true}/>
					<div className='state-grid-container community-grid-container'>
						<CommunityGrid/>
					</div>
				</div>
			);
	}
}