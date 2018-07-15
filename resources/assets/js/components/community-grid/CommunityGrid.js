import React, { Component } from 'react';
import CommunityGridItem from './CommunityGridItem';

export default class CommunityGrid extends Component {
	constructor(props) {
		super(props);
		this.state = { grid:null };
	}

	async componentWillMount() {
		try {
			let grid = [];
			let response = await axios.get('/api/communities', {
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json',
					'Authorization': 'Bearer ' + localStorage.getItem('access_token')
				}
			});
			let responseJson = response.data;
			console.log(responseJson);
			for (var i = 0; i < Object.keys(responseJson).length; i++) {
				grid.push(
					<CommunityGridItem
						community={responseJson[Object.keys(responseJson)[i]]}
					/>
				);
			}
			this.setState({grid});
		} catch (error) {
			console.error(`Error thrown in CommunityGrid component: ${error}`);
		}
	}

	render() {
		return (
			<div className='community-grid'>
				{this.state.grid}
			</div>
		);
	}
}