import React, { Component } from 'react';
import { Navbar } from '../components';
import { ConfigForm } from '../forms';
import { constants } from '../config';

export default class Config extends Component {
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
								<div className="panel-heading">{constants.CONFIGURE_PROFILE}</div>
								<div className="panel-body">
									<ConfigForm/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}