<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Repositories\User\UserRepository;
use App\Http\Controllers\ApiController;
use Auth;

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

	public function update(Request $request)
	{
		$user = $this->users->edit(Auth::user()->id, $request);

		return $this->response->noContent(); 
	}


}
