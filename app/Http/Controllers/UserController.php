<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Repositories\User\UserRepository;
use Auth;

class UserController extends Controller
{
	protected $users;
	public function __construct(UserRepository $users) {
		$this->users = $users;
	}

	public function statesWithCommunityMemberCount() {
		return $this->users->getStatesWithCommunityMemberCount();
	}

	public function authStatus() {
		return [
			'check' => Auth::check(),
			'user' => Auth::user()
		];
	}
}
