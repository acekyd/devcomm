<?php

namespace App\Http\Controllers;

use Validator;
use Config, Cookie;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Mail\Message;
use App\Http\Controllers\ApiController;
use Illuminate\Support\Facades\Password;
use Dingo\Api\Exception\ValidationHttpException;
use Illuminate\Foundation\Application;
use Illuminate\Foundation\Auth\ResetsPasswords;

use Illuminate\Support\Facades\Mail;
use App\Mail\ForgotPassword;

use Carbon\Carbon;

class ResetPasswordController extends ApiController
{

    use ResetsPasswords;


    public function __construct()
    {
        $this->middleware('guest');
    }

    /**
     * @api {post} /reset Recover Forgotten Password
     * @apiName Reset Password
     * @apiGroup Authentication
     *
     * @apiParam {String} token Token gotten from user's email
     * @apiParam {String} email User's email
     * @apiParam {String} password New password
     * @apiParam {String} password_confirmation Confirm new password
     *
     * @apiSuccess Success
     *
     * @apiError InvalidToken Invalid Token
     * @apiError InternalError could_not_reset_password
    */
    public function reset(Request $request)
    {
        $credentials = $request->only(
            'password', 'password_confirmation', 'token'
        );

        $validator = Validator::make($credentials, [
            'token' => 'required',
            'email' => 'required|email',
            'password' => 'required|confirmed|min:6',
        ]);

        if($validator->fails()) {
            throw new ValidationHttpException($validator->errors()->all());
        }

        $response = $this->broker()->reset(
            $this->credentials($request), function ($user, $password) {
                $this->resetPassword($user, $password);
            }
        );

        switch ($response) {
            case Password::PASSWORD_RESET:
                return $this->response->noContent();

            case Password::INVALID_TOKEN:
                return $this->response->error('Invalid Token', 500);

            case Password::INVALID_USER:
                return $this->response->error('User not found.', 500);

            default:
                return $this->response->error('could_not_reset_password', 500);
        }
    }
}
