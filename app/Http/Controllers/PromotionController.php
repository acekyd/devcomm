<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\CreatePromotion;
use App\Http\Controllers\ApiController;
use App\Promotion;

class PromotionController extends ApiController
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
    }

    public function create(CreatePromotion $request)
    {
        $promotion = new Promotion();

        $promotion->name = $request->name;
        $promotion->email = $request->email;
        $promotion->title = $request->title;
        $promotion->content = $request->content;
        $promotion->locations = $request->location;
        $promotion->roles = $request->role;
        $promotion->approved = 0;
        $promotion->rsvp_url = $request->rsvp_url;

        
        //upload attachment if it exists 
        if($request->hasFile('attachment'))
        {
            $file = $request->file('attachment');

            $url = \URL::to('/').'/attachments/'.time()."/".$file->getClientOriginalName();

            if($file->move(public_path().'/attachments/'.time().'/', $file->getClientOriginalName()))
            {
                $promotion->attachment = $url;
            }
            else {
                return $this->response->errorBadRequest('An error occurred while uploading attachment.');
            }
        }

        $promotion->save();

        return $this->response->noContent(); 
    }

    public function success()
    {
        if(\Session::get('message') == null) {
            return redirect('/promote');
        }
        
        return view('promotion-success');
    }
}
