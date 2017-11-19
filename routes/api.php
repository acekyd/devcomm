<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

$api = app('Dingo\Api\Routing\Router');

$api->version('v1', function ($api) {
	$api->get('/test', function() {
		return ['Ace baba!!'];
	});

	$api->post('/login', 'App\Http\Controllers\AuthController@login');
	$api->post('/signup', 'App\Http\Controllers\AuthController@signup');
	$api->post('/recovery', 'App\Http\Controllers\AuthController@recovery');
	$api->post('/reset', 'App\Http\Controllers\ResetPasswordController@reset');


	//create a promotion
	$api->post('/promote', 'App\Http\Controllers\PromotionController@create');

	//get all config
	$api->get('/config', 'App\Http\Controllers\ConfigController@index');


	$api->group(['middleware' => 'auth:api'], function ($api) {

		//get user profile
		$api->get('/profile', 'App\Http\Controllers\UserController@index');

		//update user profile, set preferences etc
		$api->post('/profile', 'App\Http\Controllers\UserController@update');

	});
});