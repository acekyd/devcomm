<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\CreatePromotion;
use App\Promotion;

class PromotionController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
    }

    /**
     * Show the promotion page.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('promotion');
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
                return redirect('/promote')->with('error', 'An error occured while uploading attachment. Try again');
            }
        }

        $promotion->save();

        return redirect('/promote/success')->with('message', 'success');
    }

    public function success()
    {
        if(\Session::get('message') == null) {
            return redirect('/promote');
        }
        
        return view('promotion-success');
    }
}
