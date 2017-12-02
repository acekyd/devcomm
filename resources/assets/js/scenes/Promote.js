import React, { Component } from 'react';
import { Navbar } from '../components';
import { PromoteForm } from '../forms';
import { constants } from '../config';

export default class Promote extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div>
				<Navbar renderOnHome={true} name='Victor'/>
				<div className="container">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2">
                            <div className="panel panel-default">
                                <div className="panel-heading">Promote an Event</div>

                                <div className="panel-body">
                                    <div id="config">
                                        <PromoteForm/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
			</div>
		);
	}
}