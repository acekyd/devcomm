import React from 'react';
import { AuthTemplate } from '../../templates';
import { LoginForm } from '../../forms';
import { constants } from '../../config';

export default function Login(props) {
	return (
		<AuthTemplate title={constants.LOGIN}>
			<LoginForm/>
		</AuthTemplate>
	);
}