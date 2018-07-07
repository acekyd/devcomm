<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\CreateCommunity;
use App\Http\Controllers\ApiController;
use App\Community;
use Illuminate\Support\Facades\Mail;

use App\Mail\NewCommunityRequest;

class CommunityController extends ApiController
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
    }

    public function create(CreateCommunity $request)
    {
        $community = new Community();

        $community->name = $request->name;
        $community->slug = str_slug($request->name, '-') . '-' . rand(1, 999);
        $community->description = $request->description;
        $community->primary_location = $request->primary_location;
        $community->twitter_handle = $request->twitter_handle;
        $community->facebook_page = $request->facebook_page;
        $community->website = $request->website;
        $community->approved = 0;


        //upload image if it exists
        if($request->hasFile('image'))
        {
            $file = $request->file('image');

            $url = \URL::to('/'). '/image/'.time()."/".$file->getClientOriginalName();

            if($file->move(public_path(). '/image/'.time().'/', $file->getClientOriginalName()))
            {
                $community->image = $url;
            }
            else {
                return $this->response->errorBadRequest('An error occurred while uploading image.');
            }
        }

        $community->save();

        Mail::to('acekyd01@gmail.com')->send(new NewCommunityRequest($community));

        return $this->response->noContent();
    }

    public function list(Request $request)
    {
        $communities = Community::where('approved', 1)->get();

        return response()->json($communities);
    }

    //Get a particular community
    public function show(Request $request)
    {
        $community = Community::where('slug', $request->slug)->first();

        return response()->json($community);
    }

}
