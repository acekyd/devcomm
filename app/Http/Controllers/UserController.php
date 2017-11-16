<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Repositories\User\UserRepository;

class UserController extends Controller
{
	protected $users;
	public function __construct(UserRepository $users) {
		$this->users = $users;
	}

	public function statesWithCommunityMemberCount() {
		return $this->users->getStatesWithCommunityMemberCount();
	}
}
