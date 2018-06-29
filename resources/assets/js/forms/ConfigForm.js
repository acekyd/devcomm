import React, { Component } from 'react';

export default class ConfigForm extends Component {
	constructor(props) {
		super(props);
		this.state = { alias:this.props.user.alias, location:this.props.user.location, role:this.props.user.role, bio:this.props.user.bio, skills:this.props.user.skills, twitter:this.props.user.twitter, facebook:this.props.user.facebook, website:this.props.user.website, github:this.props.user.github, receive_notifications:this.props.user.receive_notifications, public:this.props.user.public };
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.state.config = JSON.parse(localStorage.getItem('config'));

	}

	handleInputChange(e) {
		const target = e.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;
		this.setState({ [name]: value});
		console.log(this.state);
	}

	handleSubmit(e) {
		e.preventDefault();
		let payload = { alias:this.state.alias, location:this.state.location, role:this.state.role, bio:this.state.bio, skills:this.state.skills, twitter:this.state.twitter, facebook:this.state.facebook, website:this.state.website, github:this.state.github, receive_notifications:this.state.receive_notifications, public:this.state.public };

		document.getElementById('submitForm').setAttribute('disabled', 'true');
		this.props.handleSubmit(payload);

	}

	render() {
		if(this.props.user != null) {
			return (
				<form className="form-horizontal" onSubmit={this.handleSubmit}>
					<img className="avatar" src={this.props.user.avatar} alt={this.props.user.name} />
					<p className="gravatar-text"><small>*Avatars are fetched from <a href="https://gravatar.com" target="_blank">Gravatar</a></small></p>
					<div className="form-group">
						<label htmlFor="alias" className="col-md-4 control-label">Alias</label>
						<div className="col-md-6">
							<input required autoFocus
								id="alias" type="text" className="form-control" name="alias" value={this.state.alias}
								onChange={this.handleInputChange}/>
						</div>
					</div>

					<div className="form-group">
						<label htmlFor="location" className="col-md-4 control-label">Location</label>

						<div className="col-md-6">
							<select value={this.state.location} onChange={this.handleInputChange} name="location" required className="form-control">
								<option value="">Choose Location</option>
								{this.state.config.data.locations.map(function(location){
									return <option value={location}>{location}</option>;
								})}
							</select>
						</div>
					</div>

					<div className="form-group">
						<label htmlFor="role" className="col-md-4 control-label">Role</label>

						<div className="col-md-6">
							<select value={this.state.role} onChange={this.handleInputChange} name="role" required className="form-control">
								<option value="">Choose Role</option>
								{this.state.config.data.roles.map(function(role){
									return <option value={role}>{role}</option>;
								})}
							</select>
						</div>
					</div>

					<div className="form-group">
						<label htmlFor="bio" className="col-md-4 control-label">Short Bio</label>
						<div className="col-md-6">
							<textarea
								id="bio" type="text" className="form-control" name="bio" value={this.state.bio}
								onChange={this.handleInputChange} />
						</div>
					</div>

					<div className="form-group">
						<label htmlFor="skills" className="col-md-4 control-label">Skills</label>
						<div className="col-md-6">
							<input
								id="skills" type="text" className="form-control" name="skills" value={this.state.skills}
								onChange={this.handleInputChange} />
						</div>
					</div>

					<div className="form-group">
						<label htmlFor="twitter" className="col-md-4 control-label">Twitter Url</label>
						<div className="col-md-6">
							<input
								id="twitter" type="text" className="form-control" name="twitter" value={this.state.twitter}
								onChange={this.handleInputChange}/>
						</div>
					</div>

					<div className="form-group">
						<label htmlFor="facebook" className="col-md-4 control-label">Facebook Url</label>
						<div className="col-md-6">
							<input
								id="facebook" type="text" className="form-control" name="facebook" value={this.state.facebook}
								onChange={this.handleInputChange}/>
						</div>
					</div>

					<div className="form-group">
						<label htmlFor="website" className="col-md-4 control-label">Website Url</label>
						<div className="col-md-6">
							<input
								id="website" type="text" className="form-control" name="website" value={this.state.website}
								onChange={this.handleInputChange}/>
						</div>
					</div>

					<div className="form-group">
						<label htmlFor="github" className="col-md-4 control-label">GitHub Url</label>
						<div className="col-md-6">
							<input
								id="github" type="text" className="form-control" name="github" value={this.state.github}
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
							<button type="submit" className="btn btn-primary" id="submitForm">
								Update Profile
							</button>
						</div>
					</div>
				</form>
			);
		}
		return null;
	}
}