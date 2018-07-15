import React, { Component } from 'react';
import { Navbar } from '../components';
import { CommunityForm } from '../forms';
import { constants } from '../config';
import { ErrorMessages } from '../components';
import { Link } from 'react-router-dom';

export default class Community extends Component {

    constructor(props) {
        super(props)
        this.state = { errors: [], success: false };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async handleSubmit(payload) {
        try {
            let response = await fetch('/api/community', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                },
                body: payload
            });

            if (!response.ok) {
                let errors = []
                let responseJson = await response.json();
                console.log(responseJson);
                for (var error in Object.keys(responseJson.errors)) {

                    errors.push(
                        <p>{responseJson.errors[Object.keys(responseJson.errors)[error]][0]}</p>
                    );
                }
                this.setState({ errors: errors });
                document.getElementById('submitForm').removeAttribute('disabled');

            } else {
                this.setState({ success: true });
            }
        } catch (error) {
            console.log(error);
            console.error(`Error thrown in Adding Community: ${error}`);
            document.getElementById('submitForm').removeAttribute('disabled');
            // reject(error);
        }
    }

	render() {
        if(!this.state.success)
        {
            return (
                <div>
                    <Navbar />
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 col-md-offset-2">
                                <div className="panel panel-default">
                                    <div className="panel-heading">Add a Community</div>

                                    <div className="panel-body">
                                        <p>
                                            Do you have or know of an existing community of people or gatherings that help foster the growth of the tech ecosystem. Let's get it on DevComm and accessible to members across locations.
                                        </p>
                                        <div id="config">
                                            <ErrorMessages errors={this.state.errors} />
                                            <CommunityForm handleSubmit={this.handleSubmit}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
        else {
            return (
                <div>
                    <Navbar />
                    <div className="container infoMessage">
                        <div className="row">
                            <div className="col-md-12">
                                    <div>
                                        Your community submission has been received and would be made public and accessible by members of the community once approved.
                                        <br /><br />
                                        <a href="/" class="button">Return Home</a>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }

	}
}