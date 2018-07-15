<?php

namespace App\Http\Controllers\panel;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use \Serverfireteam\Panel\CrudController;

use Illuminate\Http\Request;
use App\Community;
use App\User;

class CommunityController extends CrudController{

    public function all($entity){
        parent::all($entity);

			$this->filter = \DataFilter::source(new \App\Community());
			$this->filter->add('name', 'Name', 'text');
			$this->filter->submit('search');
			$this->filter->reset('reset');
			$this->filter->build();

			$this->grid = \DataGrid::source($this->filter);
			$this->grid->add('image', '')->cell(function ($value) {
				return ($value != '') ? '<span class="thumb-small" style="width:100px;height:100px;">
													<img class="circle" src="' . $value . '" alt="" style="width:100px;height:100px;">
													<i class="online dot"></i>
												</span>' : '';
			});
			$this->grid->add('name', 'Community Name');
			$this->grid->add('description', 'Description');
			$this->grid->add('twitter_handle', 'Twitter');
			$this->grid->add('facebook_page', 'Facebook');
			$this->grid->add('approved', 'Approved');
			$this->addStylesToGrid();

        return $this->returnView();
    }

    public function  edit($entity){

        parent::edit($entity);

			$this->edit = \DataEdit::source(new \App\Community());
			$attributes = $this->edit->model;

			$this->edit->label('Edit Category');

			$this->edit->add('name', 'Community Name', 'text');
			$this->edit->add('description', 'Description', 'textarea');
			$this->edit->add('twitter_handle', 'Twitter', 'text');
			$this->edit->add('facebook_page', 'Facebook', 'text');
			$this->edit->add('image', 'Image', 'text');

			$this->edit->link('panel/Community/approve/?modify=' . \Input::get('modify'), "Approve", "BL", ['style' => 'background-color:green;color:white;']);  //add button
			$this->edit->link('panel/Community/deny/?modify=' . \Input::get('modify'), "Deny", "BL", ['style' => 'background-color:red;color:white;']);  //add button



        return $this->returnEditView();
	}

	public function approve()
	{
		$id = $_GET['modify'];

		$community = Community::where('id', $id)->first();

        $community->approved = 1;

        $community->save();

		return redirect('panel/Community/all');

	}

}
