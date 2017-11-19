import React, { Component } from 'react';
import { AuthTemplate } from '../../templates';
import { RegisterForm } from '../../forms';
import { constants } from '../../config';
import { Redirect } from 'react-router-dom';

export default class Register extends Component {
	constructor(props) {
		super(props);
		this.state = { loggedIn:false };
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	async handleSubmit(payload) {
		try {
			let response = await fetch('/api/signup', {
				method: 'POST',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(payload)
			});
			let responseJson = await response.json();
			if (!response.ok) {
				console.log(responseJson.message);
			} else {
				//Store token in local storage and update state (which causes a re-render, thus performing the check for access_token)
				localStorage.setItem('access_token', responseJson.access_token);
				this.setState({loggedIn: true});
			}
		} catch (error) {
			console.error(`Error thrown in Register: ${error}`);
			// reject(error);
		}
	}

	render() {
		if (localStorage.getItem(constants.ACCESS_TOKEN_LS)) {
			return <Redirect to='/home'/>
		} else {
			return (
				<AuthTemplate title={constants.REGISTER}>
					<RegisterForm handleSubmit={this.handleSubmit} loggedIn={this.state.loggedIn}/>
				</AuthTemplate>
			);
		}
	}
}