import React, { Component } from 'react';
import { AuthTemplate } from '../../templates';
import { LoginForm } from '../../forms';
import { constants } from '../../config';
import { Redirect } from 'react-router-dom';
import { ErrorMessages } from '../../components';

export default class Login extends Component {
	constructor(props) {
		super(props);
		this.state = { loggedIn:false, errors:[] };
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	async handleSubmit(payload) {
		try {
			let response = await fetch('/api/login', {
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

				let errors = [];

				errors.push(
					<p>{responseJson.message}</p>
				);
				this.setState({loggedIn: false, errors: errors});
				document.getElementById('submitForm').removeAttribute('disabled');

			} else {
				//Store token in local storage and update state

				localStorage.setItem('access_token', responseJson[0].access_token);
				localStorage.setItem('user', JSON.stringify(responseJson[0].user));
				this.setState({loggedIn: true});
			}
		} catch (error) {
			console.error(`Error thrown in Login: ${error}`);
			// reject(error);
		}
	}

	render() {
		if (localStorage.getItem(constants.ACCESS_TOKEN_LS)) {
			return <Redirect to='/home'/>
		} else {
			return (
				<AuthTemplate title={constants.LOGIN}>
					<ErrorMessages errors={this.state.errors}/>
					<LoginForm handleSubmit={this.handleSubmit} loggedIn={this.state.loggedIn}/>
				</AuthTemplate>
			);
		}
	}
}