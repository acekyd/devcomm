import React, { Component } from 'react';

export default class PromoteForm extends Component {
	constructor(props) {
		super(props);
		this.state = { email:'', password:'' };
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleInputChange(e) {
		const target = e.target;
		const value = target.value;
		const name = target.name;
		this.setState({ [name]: value});
	}

	handleSubmit(e) {
		e.preventDefault();
		let payload = { email:this.state.email, password:this.state.password };
		document.getElementById('submitForm').setAttribute('disabled', 'true');
		this.props.handleSubmit(payload);
		setTimeout(function(){ document.getElementById('submitForm').removeAttribute('disabled'); }, 3000);
		
	}

	render() {
		return (
			<form className="form-horizontal" method="POST" encType='multipart/form-data' action="">
                <div className="form-group">
                    <label htmlFor="name" className="col-md-4 control-label">Organizer Name</label>

                    <div className="col-md-6">
                        <input id="name" type="text" className="form-control" name="name" value="" placeholder="e.g. Abati Adewale" required autoFocus />

                    </div>
                </div>

                <div className="form-group">
                    <label for="email" className="col-md-4 control-label">Organizer Email</label>

                    <div className="col-md-6">
                        <input id="email" type="email" className="form-control" name="email" value="" placeholder="e.g. joe@email.com" required />

                    </div>
                </div>

                <div className="form-group">
                    <label for="title" className="col-md-4 control-label">Title</label>

                    <div className="col-md-6">
                        <input id="title" type="text" className="form-control" name="title" value="" placeholder="e.g. forLoop Developers Gathering" required />

                    </div>
                </div>

                <div className="form-group">
                    <label for="content" className="col-md-4 control-label">Details</label>

                    <div className="col-md-6">

                        <textarea id="content" name="content" className="form-control" rows="5" placeholder="e.g. Event details" required></textarea>

                    </div>
                </div>

                <div className="form-group">
                    <label for="rsvp_url" className="col-md-4 control-label">RSVP URL</label>

                    <div className="col-md-6">

                        <input id="rsvp_url" name="rsvp_url" className="form-control" value="" placeholder="e.g. https://meetup.com/event" required />

                    </div>
                </div>

                <div className="form-group">
                    <label for="attachment" className="col-md-4 control-label"w >Attachment/Image</label>
                    <div className="col-md-6">
                        <input type="file" id="attachment" name="attachment"/>
                        <p className="help-block">Upload flyer or promotional image.</p>
                    </div>
                </div>

                <fieldset>
                    <figcaption>Filter Audience</figcaption>
                    <div className="form-group">
                        <label for="location" className="col-md-4 control-label">Location</label>

                        <div className="col-md-6">
                            <select id="location" className="form-control" name="location" required>
                                <option value="any">Any Location</option>
                            </select>

                        </div>
                    </div>

                    <div className="form-group">
                        <label for="role" className="col-md-4 control-label">Role</label>

                        <div className="col-md-6">
                            <select id="role" className="form-control" name="role" required>
                                <option value="any">Any Role</option>
                            </select>

                        </div>
                    </div>
                </fieldset>

                <div className="form-group">

                    <div className="col-md-8 col-md-offset-4">
                        <button type="submit" className="btn btn-primary">
                            Create Promotion
                        </button>

                    </div>
                </div>

            </form>
		);
	}
}