<?php

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
Route::get('/config', 'ConfigController@index')->name('config');
Route::get('swcmc', 'UserController@statesWithCommunityMemberCount');