<?php

Route::get('/', function () {
    return view('welcome');
});

Route::group(['prefix' => 'users'], function() {
	Route::get('signup', 'UsersController@signup')->name('users.signup');
});