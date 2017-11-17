<?php

Route::get('/', function () {
    return view('welcome');
});


Route::get('/mail/html', function () {
    return view('emails.promotion', ['event_title' => 'Laravel Destruction']);
});

Route::get('/send_test_email', function(){
	Mail::raw('Sending emails with Mailgun and Laravel is easy!', function($message)
	{
		$message->to('acekyd01@gmail.com');
	});
});

Route::get('/send_test_api_email', function(){
	Mailgun::send('emails.promotion', ['event_title' => 'Laravel Destruction'], function ($message) {
        $message->to('acekyd01@gmail.com', 'Abati Adewale')->subject('DevComm is Coming!');
    });
});



Route::get('/send_test_batch_email', function(){
    $users = [
        'acekyd01@gmail.com' => [
            'name' => 'Abati Adewale',
            'age' => 37,
            'city' => 'New York'
        ],
        'vikie95@gmail.com' => [
            'name' => 'Victor Olowe',
            'age' => 41,
            'city' => 'London'
        ],
        'adewaleabati@gmail.com' => [
            'name' => 'The GOAT',
            'age' => 41,
            'city' => 'Akron Ohio'
        ]
        ];
	Mailgun::send('emails.promotion', ['event_title' => 'Laravel Destruction'], function ($message) use ($users) {
        $message->to($users)->subject('DevComm is Coming!');
    });
});



Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
Route::get('/config', 'ConfigController@index')->name('config');
Route::get('/promote', 'ConfigController@index')->name('promote');

Route::get('swcmc', 'UserController@statesWithCommunityMemberCount');

