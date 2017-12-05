import React, { Component } from 'react';
import { AuthTemplate } from '../../templates';
import { RegisterForm } from '../../forms';
import { constants } from '../../config';
import { Redirect } from 'react-router-dom';
import { ErrorMessages } from '../../components';

export default class Register extends Component {
	constructor(props) {
		super(props);
		this.state = { loggedIn:false, errors:[] };
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
				let errors = []
				for (var error in Object.keys(responseJson.errors) ) {
					
					errors.push(
						<p>{responseJson.errors[Object.keys(responseJson.errors)[error]][0]}</p>
					);
				}
				this.setState({loggedIn: false, errors: errors});
				document.getElementById('submitForm').removeAttribute('disabled');
			
			} else {
				//Store token in local storage and update state

				localStorage.setItem('access_token', responseJson[0].access_token);
				localStorage.setItem('user', JSON.stringify(responseJson[0].user));
				this.setState({loggedIn: true});
			}
		} catch (error) {
			console.error(`Error thrown in Register: ${error}`);
			// reject(error);
		}
	}

	render() {
		if (localStorage.getItem(constants.ACCESS_TOKEN_LS)) {
			return <Redirect to='/profile/edit'/>
		} else {
			return (
				<AuthTemplate title={constants.REGISTER}>
					<ErrorMessages errors={this.state.errors}/>
					<RegisterForm handleSubmit={this.handleSubmit} loggedIn={this.state.loggedIn}/>
				</AuthTemplate>
			);
		}
	}
}