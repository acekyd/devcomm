<?php

namespace App\Utilities;

class SetModelProperties {
	/**
	 * This method expects an Eloquent model and a request object(usually the result of submitting a form)
	 * For each field in the request object, we check if the field is part of the model's fillables
	 * If it is, we assign the request field value to the model fillable field
	 *
	 * Example, say we're trying to create a new User; and name is part of the User model fillables
	 * We simply create a new User($user = new App\User),
	 * and call this method with the new user object and the signup form values
	 * The method simply does the object property assignment(i.e $user->name = $value) - nothing else
	 */
	public function setProps($model, $request) {
		foreach ($request->request as $key => $value) {
			if ($model->isFillable($key)) {
				$model->{$key} = $value;
			}
		}
	}
}