import React from 'react';
import { constants } from '../../config';
import { Link } from 'react-router-dom';

export default function UserGridItem(props) {
	return (
		<div className='user-grid-item'>
				<div className='user-grid-item__inner'>
					<Link to={"/u/"+props.user.alias}>
						<img src={props.user.avatar} />
					</Link>
					<Link to={"/u/"+props.user.alias}>
						<p className="name">{props.user.name}</p>
					</Link>
					<p className="role">{props.user.role}</p>
				</div>
		</div>
	);
}