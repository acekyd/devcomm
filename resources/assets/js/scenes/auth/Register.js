import React from 'react';
import { AuthTemplate } from '../../templates';
import { RegisterForm } from '../../forms';
import { constants } from '../../config';

export default function Register(props) {
	return (
		<AuthTemplate title={constants.REGISTER}>
			<RegisterForm/>
		</AuthTemplate>
	);
}