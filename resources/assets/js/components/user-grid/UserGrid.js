import React, { Component } from 'react';
import UserGridItem from './UserGridItem';
import { ShareButtons, ShareCounts, generateShareIcon } from 'react-share';

const {
	FacebookShareButton,
	WhatsappShareButton,
	TwitterShareButton
  } = ShareButtons;	

  const FacebookIcon = generateShareIcon('facebook');
  const TwitterIcon = generateShareIcon('twitter');
  const WhatsappIcon = generateShareIcon('whatsapp');

export default class UserGrid extends Component {
	constructor(props) {
		super(props);
		this.state = { grid:null };
	}
	

	async componentWillMount() {
		try {
			let grid = [];
			let response = await fetch('/api/profile/state/Lagos');
			let responseJson = await response.json();
			for (var i = 0; i < Object.keys(responseJson).length; i++) {
				console.log(responseJson[Object.keys(responseJson)[i]])
				grid.push(
					<UserGridItem
						user={responseJson[Object.keys(responseJson)[i]]}
					/>
				);
			}
			this.setState({grid});
		} catch (error) {
			console.error(`Error thrown in UserGrid component: ${error}`);
		}
	}

	render() {
		console.log(this.state.grid);
		const shareUrl = 'http://devcomm.co';
		const title = 'Are you passionate about Nigerian tech community? Join me and others now on DevComm.co';
		return (
			<div className='user-grid'>
				{this.state.grid}

			
			{this.state.grid == null || this.state.grid.length < 1 ? (
				<div className='socialShare'>
					<p>You seem to be the first from your state. Get others to join now and let's build the community.</p>
					<div className="socialShareIcons">
						<TwitterShareButton url={shareUrl} title={title}>
							<TwitterIcon size={64} round />
						</TwitterShareButton>
						<FacebookShareButton url={shareUrl} quote={title}>
							<FacebookIcon size={64} round />
						</FacebookShareButton>	
						<WhatsappShareButton url={shareUrl} title={title} separator=":: ">
							<WhatsappIcon size={64} round />
						</WhatsappShareButton>
					</div>
				</div>
			): null}

			</div>
		);
	}
}