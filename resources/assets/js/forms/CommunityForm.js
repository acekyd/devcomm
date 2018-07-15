import React, { Component } from 'react';

export default class CommunityForm extends Component {
	constructor(props) {
		super(props);
		this.state = { name:'', description:'', primary_location:'any', twitter_handle:null, facebook_page:null, website:null, image: '' };
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
        formData.append('description', this.state.description);
        formData.append('primary_location', this.state.primary_location);
        formData.append('twitter_handle', this.state.twitter_handle);
        formData.append('facebook_page', this.state.facebook_page);
        formData.append('website', this.state.website);
        formData.append('image', this.state.image);

        console.log(formData);
		document.getElementById('submitForm').setAttribute('disabled', 'true');
		this.props.handleSubmit(formData);
	}

	render() {
		return (
            <form className="form-horizontal" onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name" className="col-md-4 control-label">Community Name</label>
                    <div className="col-md-6">
                        <input id="name" type="text" className="form-control" name="name" placeholder="e.g. Open Source Community Lagos" required autoFocus value={this.state.name} onChange={this.handleInputChange} />
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="description" className="col-md-4 control-label">Description</label>
                    <div className="col-md-6">
                        <textarea id="description" name="description" className="form-control" rows="5" placeholder="e.g. Community Description" required value={this.state.description} onChange={this.handleInputChange} ></textarea>
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="primary_location" className="col-md-4 control-label">Primary Location</label>
                    <div className="col-md-6">
                        <select id="primary_location" className="form-control" name="primary_location" value={this.state.primary_location} onChange={this.handleInputChange} required>
                            <option value="any">Any Location</option>
                            {this.state.config.data.locations.map(function (location) {
                                return <option value={location}>{location}</option>;
                            })}
                        </select>
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="twitter_handle" className="col-md-4 control-label">Twitter Handle</label>
                    <div className="col-md-6">
                        <input id="twitter_handle" type="text" className="form-control" name="twitter_handle" placeholder="@LaravelNigeria" value={this.state.twitter_handle} onChange={this.handleInputChange} />
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="facebook_page" className="col-md-4 control-label">Facebook Page</label>
                    <div className="col-md-6">
                        <input id="facebook_page" name="facebook_page" className="form-control" value={this.state.facebook_page} onChange={this.handleInputChange} placeholder="e.g. https://www.facebook.com/laravelnigeria" />
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="website" className="col-md-4 control-label">Website</label>
                    <div className="col-md-6">
                        <input id="website" name="website" className="form-control" value={this.state.website} onChange={this.handleInputChange} placeholder="e.g. laravelnigeria.com"  />
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="image" className="col-md-4 control-label">Image</label>
                    <div className="col-md-6">
                        <input type="file" id="image" name="image" onChange={this.handleFileChange} required/>
                        <p className="help-block">Upload community image or Logo.</p>
                    </div>
                </div>

                <div className="form-group">
                    <div className="col-md-8 col-md-offset-4">
                        <button type="submit" className="btn btn-primary" id="submitForm">
                            Add Community
                        </button>
                    </div>
                </div>

            </form>
		);
	}
}