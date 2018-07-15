<?php

namespace App\Http\Requests;

use Dingo\Api\Http\FormRequest;

class CreateCommunity extends FormRequest
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
            'description' => 'required|min:20',
            'primary_location' => 'required',
            'twitter_handle' => 'min:3',
            'image' => 'required|image'
        ];
    }
}
