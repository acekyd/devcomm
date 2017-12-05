import React from 'react';
import {
	BrowserRouter as Router,
	Route, Link
} from 'react-router-dom';
import * as Scenes from '../scenes';

export default function Routes(props) {
	return (
		<Router>
			<div>
				<Route exact path='/' component={Scenes.Landing}/>
				<Route path='/login' component={Scenes.authScenes.Login}/>
				<Route path='/register' component={Scenes.authScenes.Register}/>
				<Route path='/home' component={Scenes.Home}/>
				<Route path='/profile/edit' component={Scenes.Config}/>
				<Route path='/promote' component={Scenes.Promote}/>
				<Route path='/u/:page' component={Scenes.Profile}/>
			</div>
		</Router>
	);
}