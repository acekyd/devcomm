<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\CreatePromotion;
use App\Http\Controllers\ApiController;
use App\Promotion;
use Illuminate\Support\Facades\Mail;

use App\Mail\NewPromotionRequest;

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
        $promotion->slug = str_slug($request->title, '-') . '-' . rand(1, 999);
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

        Mail::to('acekyd01@gmail.com')->send(new NewPromotionRequest($promotion));

        return $this->response->noContent();
    }

    public function list(Request $request)
    {
        $promotions = Promotion::where('approved', 1)->get();

        return response()->json($promotions);
    }

    //Get a particular promotion
    public function show(Request $request)
    {
        $promotion = Promotion::where('slug', $request->slug)->first();

        return response()->json($promotion);
    }

}
