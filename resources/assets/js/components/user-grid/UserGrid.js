import React, { Component } from 'react';
import UserGridItem from './UserGridItem';
import { ShareButtons, ShareCounts, generateShareIcon } from 'react-share';
import { Redirect } from 'react-router-dom';

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
		this.state = { grid: null, changeLocation: null };
		this.state.config = JSON.parse(localStorage.getItem('config'));
		this.handleLocationChange = this.handleLocationChange.bind(this);
	}


	async componentDidMount() {
		this.fetchUserState();
	}

	async componentDidUpdate(prevProps) {
		if (prevProps.state !== this.props.state) {
			if (this.state.changeLocation) {
				this.setState({ changeLocation: null });
				this.fetchUserState();
			}
		}
	}

	async componentWillReceiveProps(nextProps) {
		if(nextProps.searchKeyword.length > 1) {
			this.fetchKeywordSearch(nextProps.searchKeyword);
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

	async fetchKeywordSearch(keyword) {
		try {
			let grid = [];
			let response = await axios.get('/api/profile/find/' + keyword, {
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

	handleLocationChange(e) {
		const target = e.target;
		const value = target.value;
		this.setState({ changeLocation: value });
	}


	render() {
		const shareUrl = 'http://devcomm.co';
		const title = 'Are you passionate about Nigerian tech community? Join me and others now on DevComm.co';

		if (this.state.changeLocation != null && this.state.changeLocation != this.props.state) {
			return <Redirect to={'/location/'+this.state.changeLocation} />;
		}

		return (
				<div className='user-grid'>
					<div className='switchLocation'>Currently showing users in&nbsp;
					<select value={this.props.state} name="location" onChange={this.handleLocationChange}>
							{this.state.config.data.locations.map(function (location) {
								return <option value={location}>{location}</option>;
							})}
						</select>
						&nbsp;State</div>

					{this.state.grid}
					{this.state.grid == null || this.state.grid.length < 2 ? (
						<div className='socialShare'>
							<p>Seems we need more people here. Get others to join now and build the community.</p>
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
					) : null}
				</div>

		);
	}
}