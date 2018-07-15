import React from 'react';
import {
	BrowserRouter as Router,
	Route, Link, Switch
} from 'react-router-dom';
import * as Scenes from '../scenes';

export default function Routes(props) {
	return (
		<Router>
			<div>
				<Switch>
					<Route exact path='/' component={Scenes.Landing}/>
					<Route path='/login' component={Scenes.authScenes.Login}/>
					<Route path='/logout' component={Scenes.authScenes.Logout}/>
					<Route path='/register' component={Scenes.authScenes.Register}/>
					<Route path='/home' component={Scenes.Home}/>
					<Route path='/profile/edit' component={Scenes.Config}/>
					<Route path='/promote' component={Scenes.Promote}/>
					<Route path='/community/all' component={Scenes.Communities} />
					<Route path='/community' component={Scenes.Community} />
					<Route path='/u/:page' component={Scenes.Profile}/>
					<Route path='/location/:state' component={Scenes.Home}/>

					{/* add 404 page */}
					<Route path="*" component={Scenes.NotFound} />
				</Switch>
			</div>
		</Router>
	);
}