import React, { Component } from 'react';

import { constants } from '../../config';
import { Redirect } from 'react-router-dom';

export default class Logout extends Component {

	render() {
        localStorage.clear();
        return <Redirect to='/' />
	}
}