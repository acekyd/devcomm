<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;


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
}
