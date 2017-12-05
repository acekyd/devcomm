import React, { Component } from 'react';
import { constants } from '../config';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome'

export default class User extends Component {
    constructor(props) {
		super(props);
		this.state = { user:null };
    }

    renderOnUser() {
		if (this.state.user != null) {
			return (
                <div className='user'>
                    <div className="avatar">
                        <img src={this.state.user.avatar} alt={this.state.user.name} />
                    </div>
                    <div className="details">
                        <div className="name-box">
                            <p>I'm <span className="name">{this.state.user.name}</span></p>
                            <p className="alias">@{this.state.user.alias}</p>    
                        </div>
                        <div className="entry">
                            <p className="title">Role</p>
                            <p className="value">{this.state.user.role}</p>
                        </div>

                        <div className="entry">
                            <p className="title">Location</p>
                            <p className="value">{this.state.user.location}</p>
                        </div>

                        <div className="entry">
                            <p className="title">Website</p>
                            <p className="value"><a href={this.state.user.website} target="_blank">{this.state.user.website}</a></p>
                        </div>
                        <div className="icons">
                            { this.state.user.twitter != null ? (
                                <a href={this.state.user.twitter} target="_blank"> 
                                    <FontAwesome name='twitter' size='2x'  /> 
                                </a>
                            ) : null }
                            { this.state.user.facebook != null ? (
                                <a href={this.state.user.facebook} target="_blank"> 
                                    <FontAwesome name='facebook' size='2x'  /> 
                                </a>
                            ) : null }
                            { this.state.user.github != null ? (
                                <a href={this.state.user.github} target="_blank"> 
                                    <FontAwesome name='github' size='2x'  /> 
                                </a>
                            ) : null }
                            
                        </div>
                        
                        <div className="state-link">
                            <Link to={"/location/"+this.state.user.location}>&larr; See other community members in {this.state.user.location} </Link>
                        </div>
                    </div>
                </div>
			);
		} else return null
	}

    
    async componentWillMount() {
		try {
			let user = [];
			let response = await fetch('/api/profile/'+this.props.user);
            let responseJson = await response.json();
            user = responseJson;
			this.setState({user});
		} catch (error) {
			console.error(`Error thrown in User component: ${error}`);
		}
    }
    
	render() {
		return (
			<div className='user-container'>
                    {this.renderOnUser()}
			</div>
		);
	}
}