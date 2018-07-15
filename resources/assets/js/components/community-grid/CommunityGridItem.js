import React from 'react';
import { constants } from '../../config';
import FontAwesome from 'react-fontawesome'

export default function CommunityGridItem(props) {
	return (
		<div className='community-grid-item'>
			<div className='community-grid-item__inner'>
				<div className="image">
					<img src={props.community.image} alt={props.community.name} />
				</div>

				<div className="community">{props.community.name}</div>
				<div className="details">
					<span className="description">{props.community.description} </span>
					<div className="links">
						{props.community.twitter_handle != null ? (
							<a href={"https://twitter.com/" + props.community.twitter_handle} target="_blank">
								<FontAwesome name='twitter' size='1x' />
							</a>
						) : null}

						{props.community.facebook_page != null ? (
							<a href={props.community.facebook_page} target="_blank">
								<FontAwesome name='facebook' size='1x' />
							</a>
						) : null}

						{props.community.website != null ? (
							<a href={props.community.website} target="_blank">
								<FontAwesome name='globe' size='1x' />
							</a>
						) : null}


					</div>
				</div>
			</div>
		</div>
	);
}