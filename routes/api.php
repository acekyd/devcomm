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

	//get states with community members
	$api->get('/swcmc', 'App\Http\Controllers\UserController@statesWithCommunityMemberCount');


	//create a promotion
	$api->post('/promote', 'App\Http\Controllers\PromotionController@create');

	//create a community
	$api->post('/commmunity', 'App\Http\Controllers\CommunityController@create');


	//get all config
	$api->get('/config', 'App\Http\Controllers\ConfigController@index');

	//get a particular user's profile by alias
	$api->get('/profile/{alias}', 'App\Http\Controllers\UserController@show');



	$api->group(['middleware' => 'auth:api'], function ($api) {

		//get user profile
		$api->get('/profile', 'App\Http\Controllers\UserController@index');

		// //get a particular user's profile by alias
		// $api->get('/profile/{alias}', 'App\Http\Controllers\UserController@show');

		//find users by query
		$api->get('/profile/find/{keywords}', 'App\Http\Controllers\UserController@find');

		//show users by state
		$api->get('/profile/state/{state}', 'App\Http\Controllers\UserController@state');

		//update user profile, set preferences etc
		$api->post('/profile', 'App\Http\Controllers\UserController@update');

		//get promotions
		$api->get('/promotions', 'App\Http\Controllers\PromotionController@list');

		//get a particular promotion by slug
		$api->get('/promotion/{slug}', 'App\Http\Controllers\PromotionController@show');

		//get communities
		$api->get('/communities', 'App\Http\Controllers\CommunityController@list');

		//get a particular communities by slug
		$api->get('/community/{slug}', 'App\Http\Controllers\CommunityController@show');

	});
});