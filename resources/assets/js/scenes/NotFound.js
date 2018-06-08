import React, { Component } from 'react';
import { Navbar, Jumbotron } from '../components';
import { constants } from '../config';

export default class Profile extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const alias = this.props.match.params.page;
		return (
			<div id='landing'>
				<Navbar renderOnHome={true}/>
                <div className="user-grid-container">
                    <div className="user-grid">
                        <div className='socialShare'>
                            <h1 className="notFoundTitle">Oops! That page can’t be found.</h1>
                            <p className="notFoundDesc">
                                It looks like nothing was found at this location. Maybe try one of the links in the menu or press back to go to the previous page.
                        </p>
                        </div>
                    </div>
                </div>
			</div>
		);
	}
}