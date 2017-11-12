<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Community extends Model
{
    /**
     * The attributes that are mass assignable.
	 * Items in the array are arranged in the other they appear in the create_notification_settings_table migration file
     *
     * @var array
     */
    protected $fillable = [
		'name', 'primary_location', 'image', 'description', 'twitter_handle', 'facebook_page', 'website'
	];
}
