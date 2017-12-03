import React, { Component } from 'react';
import UserGridItem from './UserGridItem';

export default class UserGrid extends Component {
	constructor(props) {
		super(props);
		this.state = { grid:null };
	}

	async componentWillMount() {
		try {
			let grid = [];
			let response = await fetch('/api/profile/state/Lagos');
			let responseJson = await response.json();
			for (var i = 0; i < Object.keys(responseJson).length; i++) {
				console.log(responseJson[Object.keys(responseJson)[i]])
				grid.push(
					<UserGridItem
						user={responseJson[Object.keys(responseJson)[i]]}
					/>
				);
			}
			this.setState({grid});
		} catch (error) {
			console.error(`Error thrown in UserGrid component: ${error}`);
		}
	}

	render() {
		return (
			<div className='user-grid'>
				{this.state.grid}
			</div>
		);
	}
}