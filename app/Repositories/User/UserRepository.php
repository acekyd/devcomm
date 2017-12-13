<?php

namespace App\Repositories\User;

use App\User;
use App\State;
use App\Repositories\User\UserContract;
use App\Utilities\SetModelProperties;

class UserRepository implements UserContract {
	public function findOne($id) {
		return User::find($id);
	}

	public function findAll() {
		return User::all();
	}

	public function create($request) {
		$user = new User;
		$smp = new SetModelProperties();
		$smp->setProps($user, $request);
		$user->password = bcrypt($request->password);
		$user->receive_notifications = !is_null($request->receive_notifications);
		$user->public = !is_null($request->public);
		$user->save();
		return $user;
	}

	public function edit($id, $request) {
		$user = $this->findOne($id);
		$smp = new SetModelProperties();
		$smp->setProps($user, $request);
		$user->receive_notifications = $request->receive_notifications ? 1 : 0;
		$user->public = $request->public ? 1 : 0;
		$user->save();
		return $user;
	}

	public function remove($id) {
		$user = $this->findOne($id);
		return $user->delete();
	}

	public function findUsersInStates(...$states) {
		return User::whereIn('location', $states)->get();
	}

	public function getStateCommunityMemberCount($state) {
		return User::where('location', $state)->count();
	}

	public function getStatesWithCommunityMemberCount() {
		$result = State::leftJoin('users', 'users.location', '=', 'states.state')
		->groupBy('states.state')
		->orderBy('memberCount', 'desc')
		->get(['states.state', \DB::raw('count(users.location) as memberCount')]);

		return $result;
	}
}