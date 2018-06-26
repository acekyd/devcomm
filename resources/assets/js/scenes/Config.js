import React, { Component } from 'react';
import { Navbar, ErrorMessages, Authenticated } from '../components';
import { ConfigForm } from '../forms';
import { constants } from '../config';
import { Redirect } from 'react-router-dom';


export default class Config extends Component {
	constructor(props) {
		super(props)
		this.state = { errors:[], success:false, user: null };
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	async handleSubmit(payload) {
		try {
			let response = await fetch('/api/profile', {
				method: 'POST',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json',
					'Authorization': 'Bearer '+localStorage.getItem('access_token')
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
				this.setState({errors: errors});
				document.getElementById('submitForm').removeAttribute('disabled');

			} else {

				//Store updated data in local storage
				localStorage.setItem('user', JSON.stringify(responseJson));
				this.setState({success:true});
			}
		} catch (error) {
			console.error(`Error thrown in Profile Update: ${error}`);
			document.getElementById('submitForm').removeAttribute('disabled');
			// reject(error);
		}
	}

	async componentWillMount() {
		try {
			let user = null;
			let response = await axios.get('/api/profile/', {
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json',
					'Authorization': 'Bearer '+localStorage.getItem('access_token')
				}
			});

			let responseJson = response.data;
			user = responseJson;
			this.setState({user: user});
		} catch (error) {
			console.error(`Error thrown in UserGrid component: ${error}`);
		}
	}


	render() {
		if (this.state.success) {
			return <Redirect to='/home'/>
		}
		return (
			<div>
				<Authenticated />
				<Navbar renderOnHome={true}/>
				<div className="container">
					<div className="row">
						<div className="col-md-8 col-md-offset-2">
							<div className="panel panel-default">
								<div className="panel-heading">{constants.CONFIGURE_PROFILE}</div>
								<div className="panel-body">
									<ErrorMessages errors={this.state.errors}/>
									{ this.state.user ? <ConfigForm handleSubmit={this.handleSubmit} user={this.state.user} /> : null }
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}