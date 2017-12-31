<?php

namespace App\Http\Controllers\panel;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use \Serverfireteam\Panel\CrudController;

use Illuminate\Http\Request;
use App\Promotion;
use App\User;

class PromotionController extends CrudController{

    public function all($entity){
        parent::all($entity);

			$this->filter = \DataFilter::source(new \App\Promotion);
			$this->filter->add('name', 'Name', 'text');
			$this->filter->submit('search');
			$this->filter->reset('reset');
			$this->filter->build();

			$this->grid = \DataGrid::source($this->filter);
			$this->grid->add('attachment', '')->cell(function ($value) {
				return ($value != '') ? '<span class="thumb-small" style="width:100px;height:100px;">
													<img class="circle" src="' . $value . '" alt="" style="width:100px;height:100px;">
													<i class="online dot"></i>
												</span>' : '';
			});
			$this->grid->add('name', 'Organization Name');
			$this->grid->add('email', 'Organization Email');
			$this->grid->add('title', 'Promotion Title');
			$this->grid->add('content', 'Details');
			$this->grid->add('approved', 'Approved');
			$this->addStylesToGrid();

        return $this->returnView();
    }

    public function  edit($entity){

        parent::edit($entity);

			$this->edit = \DataEdit::source(new \App\Promotion());
			$attributes = $this->edit->model;

			$this->edit->label('Edit Category');

			$this->edit->add('name', 'Organization Name', 'text');
			$this->edit->add('email', 'Organization Email', 'text');
			$this->edit->add('title', 'Promotion Title', 'text');
			$this->edit->add('content', 'Details', 'textarea');
			$this->edit->add('attachment', 'Attachment', 'text');

			$this->edit->link('panel/Promotion/approve/?modify=' . \Input::get('modify'), "Approve", "BL", ['style' => 'background-color:green;color:white;']);  //add button
			$this->edit->link('panel/Promotion/deny/?modify=' . \Input::get('modify'), "Deny", "BL", ['style' => 'background-color:red;color:white;']);  //add button



        return $this->returnEditView();
	}

	public function approve()
	{
		$id = $_GET['modify'];

		$promotion = Promotion::where('id', $id)->first();
		$locations = $promotion->locations;
		$roles = $promotion->roles;

		$users = User::inRandomOrder()
						->when($locations, function ($query) use ($locations) {
							if($locations != 'any')
								return $query->where('location', $locations);
						})
						->when($roles, function ($query) use ($roles) {
							if ($roles != 'any')
								return $query->where('role', $roles);
						})
						->select('email', 'name', 'location', 'role')
						->get()->KeyBy('email')->all();

		\Mailgun::send('emails.promotion', ['promotion' => $promotion], function ($message) use ($users, $promotion) {
			$message->to($users)->subject('DevComm: '.$promotion->title);
		});

		$promotion->approved = 1;
		$promotion->recipients = serialize($users);
		$promotion->save();

		return redirect('panel/Promotion/all');

	}

}
