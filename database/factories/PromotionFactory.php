<?php

use Faker\Generator as Faker;

$factory->define(App\Promotion::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'email' => $faker->unique()->safeEmail,
        'title' => $faker->sentence,
        'content' => $faker->paragraph,
        'locations' => 'any',
        'roles' => 'any',
        'rsvp_url' => 'meetup.com'
    ];
});
