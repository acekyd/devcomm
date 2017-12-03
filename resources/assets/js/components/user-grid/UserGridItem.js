import React from 'react';
import { constants } from '../../config';

export default function UserGridItem(props) {
	return (
		<div className='user-grid-item'>
			<div className='user-grid-item__inner'>
				<img src={props.user.avatar} />
				<p className="name">{props.user.name}</p>
				<p className="role">{props.user.role}</p>
			</div>
		</div>
	);
}