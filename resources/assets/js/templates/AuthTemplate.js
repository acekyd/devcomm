import React from 'react';
import { AuthNavbar } from '../components';

export default function AuthTemplate(props) {
	return (
		<div>
			<AuthNavbar/>
			<div className="container">
				<div className="row">
					<div className="col-md-8 col-md-offset-2">
						<div className="panel panel-default">
							<div className="panel-heading">{props.title}</div>
							<div className="panel-body">
								{props.children}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}