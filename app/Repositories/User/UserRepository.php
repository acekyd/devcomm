<?php

namespace App\Repositories\User;

use App\User;
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
		$user->save();
		return $user;
	}

	public function edit($id, $request) {
		$user = $this->findOne($id);
		$smp = new SetModelProperties();
		$smp->setProps($user, $request);
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
		$res = []; $states = config('data.locations');
		foreach ($states as $state) {
			$res[$state] = $this->getStateCommunityMemberCount($state);
		}

		return $res;
	}
}