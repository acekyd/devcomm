<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class NotificationSetting extends Model
{
    /**
     * The attributes that are mass assignable.
	 * Items in the array are arranged in the other they appear in the create_notification_settings_table migration file
     *
     * @var array
     */
    protected $fillable = [
		'interests_enabled', 'locations_enabled', 'roles_enabled'
	];

	public function user() {
		return $this->belongsTo('App\User');
	}
}
