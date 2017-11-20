<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Repositories\User\UserRepository;
use App\Http\Controllers\ApiController;
use Auth;

class ConfigController extends ApiController
{

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $config['data'] = config('data');
        $config['data']['roles'] = config('devcommroles.roles');
        
        return response()->json($config);
	  }
}
