import React from 'react';
import { AuthTemplate } from '../../templates';
import { LoginForm } from '../../forms';
import { constants } from '../../config';
import '../../../styles/auth.css';

export default function Login(props) {
	return (
		<AuthTemplate title={constants.LOGIN}>
			<LoginForm/>
		</AuthTemplate>
	);
}