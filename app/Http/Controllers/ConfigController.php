<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Repositories\User\UserRepository;
use Auth;

class ConfigController extends Controller
{
	protected $users;
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(UserRepository $users)
    {
		$this->middleware('auth');
		$this->users = $users;
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('config');
	  }

	public function submitConfig(Request $request) {
		$user = $this->users->edit(Auth::user()->id, $request);
		return redirect()->route('index');
	}
}
