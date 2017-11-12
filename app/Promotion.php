<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Promotion extends Model
{
	/**
     * The attributes that are mass assignable.
	 * Items in the array are arranged in the other they appear in the create_promotions_table migration file
     *
     * @var array
     */
    protected $fillable = [
		'name', 'email', 'title', 'content', 'attachment', 'recipients',
		'interests', 'locations', 'roles', 'rsvp_url'
    ];
}
