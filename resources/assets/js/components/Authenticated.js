import React, { Component } from 'react';
import { constants } from '../config';
import { Redirect } from 'react-router-dom';

export default class Authenticated extends Component {

	render() {
        let user = JSON.parse(localStorage.getItem('user'));
        if (user == null) {
            return <Redirect to='/Login' />
        }

        return null;
	}
}