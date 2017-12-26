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
		this.fetchUserState();
	}


	async componentWillReceiveProps() {
		if(this.props.searchKeyword.length > 1) {
			this.fetchKeywordSearch();
		}
		else {
			this.fetchUserState();
		}
	}

	async fetchUserState() {
		try {
			let grid = [];
			let response = await axios.get('/api/profile/state/' + this.props.state, {
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json',
					'Authorization': 'Bearer ' + localStorage.getItem('access_token')
				}
			});

			let responseJson = response.data;
			for (var i = 0; i < Object.keys(responseJson).length; i++) {
				grid.push(
					<UserGridItem
						user={responseJson[Object.keys(responseJson)[i]]}
					/>
				);
			}
			this.setState({ grid });
		} catch (error) {
			console.error(`Error thrown in UserGrid component: ${error}`);
		}
	}

	async fetchKeywordSearch() {
		try {
			let grid = [];
			let response = await axios.get('/api/profile/find/' + this.props.searchKeyword, {
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json',
					'Authorization': 'Bearer ' + localStorage.getItem('access_token')
				}
			});

			let responseJson = response.data;
			for (var i = 0; i < Object.keys(responseJson).length; i++) {
				grid.push(
					<UserGridItem
						user={responseJson[Object.keys(responseJson)[i]]}
					/>
				);
			}
			this.setState({ grid });
		} catch (error) {
			console.error(`Error thrown in UserGrid Search component: ${error}`);
		}
	}
	render() {
		const shareUrl = 'http://devcomm.co';
		const title = 'Are you passionate about Nigerian tech community? Join me and others now on DevComm.co';
		return (
			<div className='user-grid'>
				{this.state.grid}


			{this.state.grid == null || this.state.grid.length < 2 ? (
				<div className='socialShare'>
					<p>Seems we need more people here. Get others to join now and let's build the community.</p>
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