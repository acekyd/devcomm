<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Repositories\User\UserRepository;
use App\Http\Controllers\ApiController;
use Auth;
use App\User;
use App\Http\Requests\UpdateUserRequest;

class UserController extends ApiController
{
	protected $users;
	public function __construct(UserRepository $users) {
		$this->users = $users;
	}

	public function statesWithCommunityMemberCount() {
		return $this->users->getStatesWithCommunityMemberCount();
	}

	public function index(Request $request) {
		
		return response()->json($request->user());

	}

	//Get a particular person's profile by alias
	public function show(Request $request) {
		$user = User::where('alias', $request->alias)->first();

		return response()->json($user);
	}


	public function update(UpdateUserRequest $request)
	{
		$user = $this->users->edit($request->user()->id, $request);

		return $this->response->noContent(); 
	}


}
