<?php

namespace App\Http\Requests;

use Dingo\Api\Http\FormRequest;

class CreatePromotion extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required',
            'email' => 'required|email',
            'title' => 'required|min:6',
            'content' => 'required|min:20',
            'location' => 'required',
            'role' => 'required',
            'rsvp_url' => 'url',
            'attachment' => 'nullable|image'
        ];
    }
}
