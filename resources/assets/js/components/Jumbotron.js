import React from 'react';
import { constants } from '../config';

export default function Jumbotron(props) {
	return (
		<div className='header-container'>
			<div className='header'>
				<div className='logo'>
					<h2>{props.text}</h2>
				</div>
				 <div className='cta'>
					<a href="/register" className="button join">{constants.SIGNUP_CTA}</a>
					<a href="/promote" className="button promote">{constants.PROMOTE_CTA}</a>
				 </div>

			</div>
		</div>
	);
}