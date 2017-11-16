import React from 'react';
import { constants } from '../config';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
	return (
		<div className='menu-container'>
			<div className='menu'>
				<div className='brand'>{constants.APP_NAME}</div>
				<div className='links'>
					<a href="/register" className='register'>Join</a>
					<Link to="/login" className='login'>Login</Link>
					<a href="/promote" className='promote'>Promote</a>
				</div>
			</div>
		</div>
	);
}