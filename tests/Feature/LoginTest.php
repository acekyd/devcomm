<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

class LoginTest extends TestCase
{
    protected $baseUrl = 'http://127.0.0.1';

    /**
     * A basic test example.
     *
     * @return void
     */
    public function testRequiresEmailAndLogin()
    {
        $response = $this->json('POST', 'api/login')
        ->assertStatus(422)
        ->assertJson([
            "message" => "422 Unprocessable Entity",
            "errors" => [
                "email" => ["The email field is required."] ,
                "password" => ["The password field is required."]
            ],
            "status_code" => 422
        ]);
    }

    public function testUserLoginsSuccessfully()
    {
        $user = factory('App\User')->create([
            'email' => 'testlogin@devcomm.co',
            'password' => bcrypt('devcomm')
        ]);

        var_dump($user);

        $payload = ['email' => $user->email, 'password' => 'devcomm'];
        $this->json('POST', 'api/login', $payload)
        ->assertStatus(200)
        ->assertJsonStructure([
            'access_token'
        ]);
    }
}
