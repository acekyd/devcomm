<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class State extends Model
{
    /**
     * The attributes that are mass assignable.
	 * Items in the array are arranged in the other they appear in the create_states_table migration file
     *
     * @var array
     */
    protected $fillable = [
		'name', 'slug', 'logo'
    ];
}
