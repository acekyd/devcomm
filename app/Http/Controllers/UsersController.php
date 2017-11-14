<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Repositories\User\UserContract;

class UsersController extends Controller
{
	protected $userRepo;
	public function __construct(UserContract $userContract) {
		$this->userRepo = $userContract;
	}

	public function signup() {

	}
}