import React from 'react';
import { AuthTemplate } from '../../templates';
import { constants } from '../../config';
import '../../../styles/auth.css';

export default function Login(props) {
	return (
		<AuthTemplate title={constants.LOGIN}>
			<p>Hello</p>
		</AuthTemplate>
	);
}