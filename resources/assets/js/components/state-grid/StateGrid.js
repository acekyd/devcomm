import React, { Component } from 'react';
import StateGridItem from './StateGridItem';

export default class StateGrid extends Component {
	constructor(props) {
		super(props);
		this.state = { grid:null };
	}

	async componentWillMount() {
		try {
			let grid = [];
			let response = await fetch('/swcmc');
			let responseJson = await response.json();
			for (var i = 0; i < Object.keys(responseJson).length; i++) {
				grid.push(
					<StateGridItem
						state={Object.keys(responseJson)[i]}
						memberCount={responseJson[Object.keys(responseJson)[i]]}
					/>
				);
			}
			this.setState({grid});
		} catch (error) {
			console.error(`Error thrown in StateGrid component: ${error}`);
		}
	}

	render() {
		return (
			<div className='state-grid'>
				{this.state.grid}
			</div>
		);
	}
}