import React from 'react';
import { constants } from '../config';

export default function Navbar(props) {
	return (
		<div className='menu-container'>
			<div className='menu'>
				<div className='brand'>{constants.APP_NAME}</div>
				<div className='links'>
					<a href="/register" className='register'>Join</a>
					<a href="/login" className='login'>Login</a>
					<a href="/promote" className='promote'>Promote</a>
				</div>
			</div>
		</div>
	);
}