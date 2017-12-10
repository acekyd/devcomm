import React from 'react';
import { constants } from '../../config';

export default function StateGridItem(props) {
	return (
		<div className='state-grid-item'>
			<div className='state-grid-item__inner'>
				<div className="state">{props.state}</div>
				<div className="details">
					<span className="count">{props.memberCount} </span>
					<span>{constants.COMMUNITY_MEMBERS}</span>
				</div>
			</div>
		</div>
	);
}