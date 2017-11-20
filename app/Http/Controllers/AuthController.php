<?php

namespace App\Http\Controllers;

use Validator;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Mail\Message;
use App\Http\Controllers\ApiController;
use Illuminate\Support\Facades\Password;
use Dingo\Api\Exception\ValidationHttpException;
use Illuminate\Foundation\Application;
use Illuminate\Foundation\Auth\SendsPasswordResetEmails;

use Illuminate\Support\Facades\Mail;
use App\Mail\ForgotPassword;
use App\Mail\NewUserSignUp;


use App\Http\Requests\LoginUserRequest;
use App\Http\Requests\SignupUserRequest;
use App\Http\Requests\InviteSignupUserRequest;

use Carbon\Carbon;

class AuthController extends ApiController
{
    private $apiConsumer;

    use SendsPasswordResetEmails;


    public function __construct(Application $app) {
        //Initializing library for making internal api requests
        $this->apiConsumer = $app->make('apiconsumer');
    }


    /**
     * @api {post} /login Login User
     * @apiName Login
     * @apiGroup Authentication
     *
     * @apiParam {String} email User's email
     * @apiParam {String} password User's password
     *
     * @apiSuccess {String} access_token Access token to be passed on for authentication. 'Authorization: Bearer access_token'
     *
     * @apiError UnprocessableEntity Validation failed
     * @apiError Unauthorized Incorrect credentials
    */
    public function login(LoginUserRequest $request)
    {
        //call function that handles actual user authentication
        return $this->attemptLogin($request->email, $request->password);
    }

    /**
     * @api {post} /signup Signup User
     * @apiName Signup
     * @apiGroup Authentication
     *
     * @apiParam {String} name User's name
     * @apiParam {String} email User's email
     * @apiParam {String} password User's password
     *
     * @apiSuccess {String} access_token Access token to be passed on for authentication. 'Authorization: Bearer access_token'
     *
     * @apiError UnprocessableEntity Validation failed
     * @apiError Unauthorized Incorrect credentials
     * @apiError InternalServerError Could not create user
    */
    public function signup(SignupUserRequest $request)
    {
        //retrieve data and set super admin as true
        $userData = $request->all();

        User::unguard();
        $user = User::create($userData);
        User::reguard();

        if(!$user->id) {
            return $this->response->errorInternal("Could not create user");
        }

        Mail::to($request->email)->send(new NewUserSignUp($user));

        return $this->attemptLogin($request->email, $request->password);
    }

    /**
     * Attempt to create an access token using user credentials
     *
     * @param string $email
     * @param string $password
     */
    public function attemptLogin($email, $password)
    {
        $user = User::where('email', $email)->first();

        if (!is_null($user)) {
            //Call function to proxy oauth authentication and return result
            $login = $this->proxy('password', [
                'username' => $email,
                'password' => $password
            ]);

            return response()->json($login);
        }

        //throw new InvalidCredentialsException();
        return $this->response->errorUnauthorized("Incorrect credentials");

    }

    /**
     * Proxy a request to the OAuth Passport server.
     *
     * @param string $grantType what type of grant type should be proxied
     * @param array $data the data to send to the server
     */
    public function proxy($grantType, array $data = [])
    {
        $data = array_merge($data, [
            'client_id'     => env('PASSWORD_CLIENT_ID'),
            'client_secret' => env('PASSWORD_CLIENT_SECRET'),
            'grant_type'    => $grantType
        ]);

        //using apiConsumer library initialized above
        $response = $this->apiConsumer->post('oauth/token', $data);

        if (!$response->isSuccessful()) {
            return $this->response->errorUnauthorized();
        }

        $data = json_decode($response->getContent());

        return [
            'access_token' => $data->access_token
        ];
    }

    /**
     * @api {post} /recovery Recover Forgotten Password
     * @apiName Forgot Password
     * @apiGroup Authentication
     *
     * @apiParam {String} email User's email
     *
     * @apiSuccess Success
     *
     * @apiError NotFound User not found
     * @apiError Unauthorized Incorrect credentials
    */

    public function recovery(Request $request)
    {
        $validator = Validator::make($request->only('email'), [
            'email' => 'required'
        ]);

        if($validator->fails()) {
            throw new ValidationHttpException($validator->errors()->all());
        }

        $user = User::where('email', $request->email)->first();
        if(!$user)
        {
            return $this->response->errorNotFound("User not found");
        }

        $token = $this->broker()->createToken($user);
        Mail::to($request->email)->send(new ForgotPassword($token));

        return $this->response->noContent();
    }
}