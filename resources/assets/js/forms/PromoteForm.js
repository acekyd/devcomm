import React, { Component } from 'react';

export default class PromoteForm extends Component {
	constructor(props) {
		super(props);
		this.state = { name:'', email:'', title:'', content:'', rsvp_url:'', location:'any', role:'any', attachment: '' };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFileChange = this.handleFileChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state.config = JSON.parse(localStorage.getItem('config'));
	}

	handleInputChange(e) {
		const target = e.target;
		const value = target.value;
		const name = target.name;
        this.setState({ [name]: value});
    }

    handleFileChange(e) {
        const target = e.target;
        const value = target.files[0];
        const name = target.name;
        this.setState({ [name]: value });
    }

	handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', this.state.name);
        formData.append('email', this.state.email);
        formData.append('title', this.state.title);
        formData.append('content', this.state.content);
        formData.append('rsvp_url', this.state.rsvp_url);
        formData.append('location', this.state.location);
        formData.append('role', this.state.role);
        formData.append('attachment', this.state.attachment);


        //let payload = { name: this.state.name, email: this.state.email, title: this.state.title, content: this.state.content, rsvp_url: this.state.rsvp_url, location: this.state.location, role: this.state.role, attachment: this.state.attachment };
        console.log(formData);
		document.getElementById('submitForm').setAttribute('disabled', 'true');
		this.props.handleSubmit(formData);
	}

	render() {
		return (
            <form className="form-horizontal" onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name" className="col-md-4 control-label">Organizer Name</label>
                    <div className="col-md-6">
                        <input id="name" type="text" className="form-control" name="name" placeholder="e.g. Abati Adewale" required autoFocus value={this.state.name} onChange={this.handleInputChange} />
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="email" className="col-md-4 control-label">Organizer Email</label>
                    <div className="col-md-6">
                        <input id="email" type="email" className="form-control" name="email" placeholder="e.g. joe@email.com" required value={this.state.email} onChange={this.handleInputChange} />
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="title" className="col-md-4 control-label">Title</label>
                    <div className="col-md-6">
                        <input id="title" type="text" className="form-control" name="title" placeholder="e.g. forLoop Developers Gathering" required value={this.state.title} onChange={this.handleInputChange} />
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="content" className="col-md-4 control-label">Details</label>
                    <div className="col-md-6">
                        <textarea id="content" name="content" className="form-control" rows="5" placeholder="e.g. Event details" required value={this.state.alias} onChange={this.handleInputChange} ></textarea>
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="rsvp_url" className="col-md-4 control-label">URL (RSVP or related)</label>
                    <div className="col-md-6">
                        <input id="rsvp_url" name="rsvp_url" className="form-control" value={this.state.rsvp_url} onChange={this.handleInputChange} placeholder="e.g. https://meetup.com/event" />
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="attachment" className="col-md-4 control-label">Attachment/Image</label>
                    <div className="col-md-6">
                        <input type="file" id="attachment" name="attachment" onChange={this.handleFileChange}/>
                        <p className="help-block">Upload flyer or promotional image.</p>
                    </div>
                </div>

                <fieldset>
                    <figcaption>Filter Audience</figcaption>
                    <div className="form-group">
                        <label htmlFor="location" className="col-md-4 control-label">Location</label>
                        <div className="col-md-6">
                            <select id="location" className="form-control" name="location" value={this.state.location} onChange={this.handleInputChange} required>
                                <option value="any">Any Location</option>
                                {this.state.config.data.locations.map(function (location) {
                                    return <option value={location}>{location}</option>;
                                })}
                            </select>
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="role" className="col-md-4 control-label">Role</label>
                        <div className="col-md-6">
                            <select id="role" className="form-control" name="role" value={this.state.role} onChange={this.handleInputChange} required>
                                <option value="any">Any Role</option>
                                {this.state.config.data.roles.map(function (role) {
                                    return <option value={role}>{role}</option>;
                                })}
                            </select>
                        </div>
                    </div>
                </fieldset>

                <div className="form-group">
                    <div className="col-md-8 col-md-offset-4">
                        <button type="submit" className="btn btn-primary" id="submitForm">
                            Create Promotion
                        </button>
                    </div>
                </div>

            </form>
		);
	}
}