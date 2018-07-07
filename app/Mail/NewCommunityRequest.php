<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class NewCommunityRequest extends Mailable
{
    use Queueable, SerializesModels;

    public $community;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($community)
    {
        $this->community = $community;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->from('hello@devcomm.co', 'DevComm.co')
        ->subject('New Community Request')
        ->view('emails.community_request');
    }
}
