import React from 'react';
import { constants } from '../../config';

export default function StateGridItem(props) {
	return (
		<div className='state-grid-item'>
			<div className='state-grid-item__inner'>
				<p>{props.state}</p>
				<p>{props.memberCount} {constants.COMMUNITY_MEMBERS}</p>
			</div>
		</div>
	);
}