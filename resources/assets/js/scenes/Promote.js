import React, { Component } from 'react';
import { Navbar } from '../components';
import { PromoteForm } from '../forms';
import { constants } from '../config';
import { ErrorMessages } from '../components';
import { Link } from 'react-router-dom';

export default class Promote extends Component {

    constructor(props) {
        super(props)
        this.state = { errors: [], success: false };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async handleSubmit(payload) {
        try {
            let response = await fetch('/api/promote', {
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
            console.error(`Error thrown in Adding Promotion: ${error}`);
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
                                    <div className="panel-heading">Promote an Event/Opportunity</div>

                                    <div className="panel-body">
                                        <p>
                                            It is said that talent is evenly distributed but opportunity is not. Promote targeted job opportunities, events, scholarships, competitions and any other information relevant to members of the community.
                                        </p>
                                        <div id="config">
                                            <ErrorMessages errors={this.state.errors} />
                                            <PromoteForm handleSubmit={this.handleSubmit}/>
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
                                        Your promotion has been added to the queue and would be sent to members matching your filter. A maximum of 500 (randomized) people matching your filter can be sent your promotion at a time.
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