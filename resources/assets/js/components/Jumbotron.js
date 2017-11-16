import React from 'react';

export default function Jumbotron(props) {
	return (
		<div className='header-container'>
			<div className='header'>
				<div className='logo'>
					<h2>{props.text}</h2>
				</div>
			</div>
		</div>
	);
}