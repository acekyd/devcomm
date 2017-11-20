<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class NewPromotionRequest extends Mailable
{
    use Queueable, SerializesModels;

    public $promotion;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($promotion)
    {
        $this->promotion = $promotion;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->from('hello@devcomm.co', 'DevComm.co')
        ->subject('New Promotion Request')
        ->view('emails.promotion_request');
    }
}
