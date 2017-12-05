import React, { Component } from 'react';
import { constants } from '../config';
import { Link } from 'react-router-dom';

export default class ErrorMessages extends Component {

	render() {
		
            if(this.props.errors.length > 0) {
                return (
                    <div className="alert alert-danger fade in">
                        {this.props.errors}
                    </div>  
                );
            }
            else {
                return (
                    null
                );
            }
			
	}
}