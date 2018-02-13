<?php

Route::get('/', function () { return view('welcome'); });

Route::get('{slug}', function() {
    return view('welcome');
})->where('slug', '(?!api)([A-z\d-\/_.]+)?');