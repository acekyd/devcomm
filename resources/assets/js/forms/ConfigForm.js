import React, { Component } from 'react';

export default class ConfigForm extends Component {
	constructor(props) {
		super(props);
		this.state = { alias:'', location:'', role:'', twitter:'', facebook:'', website:'', receive_notifications:true, public:false };
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleInputChange(e) {
		const target = e.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;
		this.setState({ [name]: value});
	}

	handleSubmit(e) {
		e.preventDefault();
		console.log('submit form');
	}

	generateStatesDropdown() {
		let res = [];
		// Continue
	}

	render() {
		return (
			<form className="form-horizontal" onSubmit={this.handleSubmit}>
				<div className="form-group">
					<label for="alias" className="col-md-4 control-label">Alias</label>
					<div className="col-md-6">
						<input required autofocus
							id="alias" type="text" className="form-control" name="alias" value={this.state.alias}
							onChange={this.handleInputChange}/>
					</div>
				</div>

				<div className="form-group">
					<label for="twitter" className="col-md-4 control-label">Twitter Url</label>
					<div className="col-md-6">
						<input
							id="twitter" type="text" className="form-control" name="twitter" value={this.state.twitter}
							onChange={this.handleInputChange}/>
					</div>
				</div>

				<div className="form-group">
					<label for="facebook" className="col-md-4 control-label">Facebook Url</label>
					<div className="col-md-6">
						<input
							id="facebook" type="text" className="form-control" name="facebook" value={this.state.facebook}
							onChange={this.handleInputChange}/>
					</div>
				</div>

				<div className="form-group">
					<label for="website" className="col-md-4 control-label">Website Url</label>
					<div className="col-md-6">
						<input
							id="website" type="text" className="form-control" name="website" value={this.state.website}
							onChange={this.handleInputChange}/>
					</div>
				</div>

				<div className="form-group">
					<div className="col-md-6 col-md-offset-4">
						<div className="checkbox">
							<label>
								<input id="receive_notifications" type="checkbox" name="receive_notifications"
									checked={this.state.receive_notifications}
									onChange={this.handleInputChange}/>
									Receive email notifications for events & opportunities.
							</label>
						</div>
					</div>
				</div>

				<div className="form-group">
					<div className="col-md-6 col-md-offset-4">
						<div className="checkbox">
							<label>
								<input id="public" type="checkbox" name="public"
									checked={this.state.public}
									onChange={this.handleInputChange}/>
									Make profile public so people can find and view your profile. Email is confidential.
							</label>
						</div>
					</div>
				</div>

				<div className="form-group">
					<div className="col-md-8 col-md-offset-4">
						<button type="submit" className="btn btn-primary">
							Update Profile
						</button>
					</div>
				</div>
			</form>
		);
	}
}