<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Laravel\Passport\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, Notifiable;

    /**
     * The attributes that are mass assignable.
	 * Items in the array are arranged in the other they appear in the create_users_table migration file
     *
     * @var array
     */
    protected $fillable = [
		'name', 'email', 'password', 'alias', 'avatar', 'twitter',
		'facebook', 'website', 'github', 'location', 'role'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
	];

	public function interests() {
		return $this->hasMany('App\UserInterest');
    }

    /**
     * This mutator automatically hashes the password.
     *
     * @var string
     */
    public function setPasswordAttribute($value)
    {
        $this->attributes['password'] = \Hash::make($value);
    }

  /**
     * Make sure that the avatar returns gravatar when null or correct url when present
     *
     * @param $value
     * @return string
     */
    public function getAvatarAttribute($value)
    {
        if($value) {
          return $value;
        }

        return "https://www.gravatar.com/avatar/".md5($this->email)."?s=200";
    }
}