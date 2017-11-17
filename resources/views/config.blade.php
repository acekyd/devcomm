@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-8 col-md-offset-2">
            <div class="panel panel-default">
                <div class="panel-heading">Configure Profile</div>

                <div class="panel-body">
                    @if (session('status'))
                        <div class="alert alert-success">
                            {{ session('status') }}
                        </div>
                    @endif

                    <div id="config">
                        <form class="form-horizontal" method="POST" action="{{ route('config.submit') }}">
                            {{ csrf_field() }}
                            <img src="{{ Auth::user()->avatar }}" class="avatar" />
                            <div class="form-group{{ $errors->has('alias') ? ' has-error' : '' }}">
                                <label for="alias" class="col-md-4 control-label">Alias</label>

                                <div class="col-md-6">
                                    <input id="name" type="text" class="form-control" name="alias" value="{{ old('alias') }}" placeholder="e.g. acekyd" required autofocus>

                                    @if ($errors->has('alias'))
                                        <span class="help-block">
                                            <strong>{{ $errors->first('alias') }}</strong>
                                        </span>
                                    @endif
                                </div>
                            </div>

                            <div class="form-group{{ $errors->has('location') ? ' has-error' : '' }}">
                                <label for="alias" class="col-md-4 control-label">Location</label>

                                <div class="col-md-6">
                                    <select id="location" class="form-control" name="location" required>
                                        <option value="">Choose Location</option>
                                        @foreach(config('data.locations') as $location)
                                            <option value="{{ $location }}" {{ (old("location") == $location ? "selected":"") }}> {{ $location }}</option>
                                        @endforeach
                                    </select>

                                    @if ($errors->has('location'))
                                        <span class="help-block">
                                            <strong>{{ $errors->first('location') }}</strong>
                                        </span>
                                    @endif
                                </div>
                            </div>

                            <div class="form-group{{ $errors->has('role') ? ' has-error' : '' }}">
                                <label for="alias" class="col-md-4 control-label">Role</label>

                                <div class="col-md-6">
                                    <select id="role" class="form-control" name="role" required>
                                        <option value="">Choose Role</option>
                                        @foreach(config('devcommroles.roles') as $role)
                                            <option value="{{ $role }}" {{ (old("role") == $role ? "selected":"") }}> {{ $role }}</option>
                                        @endforeach
                                    </select>

                                    @if ($errors->has('location'))
                                        <span class="help-block">
                                            <strong>{{ $errors->first('location') }}</strong>
                                        </span>
                                    @endif
                                </div>
                            </div>

                            <div class="form-group{{ $errors->has('twitter') ? ' has-error' : '' }}">
                                <label for="twitter" class="col-md-4 control-label">Twitter Url</label>

                                <div class="col-md-6">
                                    <input id="twitter" type="url" class="form-control" name="twitter" value="{{ old('twitter') }}" placeholder="e.g. https://twitter.com/ace_kyd">

                                    @if ($errors->has('twitter'))
                                        <span class="help-block">
                                            <strong>{{ $errors->first('twitter') }}</strong>
                                        </span>
                                    @endif
                                </div>
                            </div>

                            <div class="form-group{{ $errors->has('facebook') ? ' has-error' : '' }}">
                                <label for="facebook" class="col-md-4 control-label">Facebook Url</label>

                                <div class="col-md-6">
                                    <input id="facebook" type="url" class="form-control" name="facebook" value="{{ old('facebook') }}" placeholder="e.g. https://facebook.com/victor.olowe">

                                    @if ($errors->has('facebook'))
                                        <span class="help-block">
                                            <strong>{{ $errors->first('facebook') }}</strong>
                                        </span>
                                    @endif
                                </div>
                            </div>

                            <div class="form-group{{ $errors->has('website') ? ' has-error' : '' }}">
                                <label for="website" class="col-md-4 control-label">Website Url</label>

                                <div class="col-md-6">
                                    <input id="website" type="url" class="form-control" name="website" value="{{ old('website') }}" placeholder="e.g. https://www.acekyd.com">

                                    @if ($errors->has('website'))
                                        <span class="help-block">
                                            <strong>{{ $errors->first('website') }}</strong>
                                        </span>
                                    @endif
                                </div>
                            </div>


                            <div class="form-group">
                                <div class="col-md-6 col-md-offset-4">
                                    <div class="checkbox">
                                        <label>
                                            <input type="checkbox" value="yes" name="receive_notifications" id="receive_notifications">
                                            Receive email notifications for events & opportunities.
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                <div class="col-md-6 col-md-offset-4">
                                    <div class="checkbox">
                                        <label>
                                            <input type="checkbox" value="yes" name="public" id="public">
                                            Make profile public so people can find and view your profile. Email is confidential.
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">

                                <div class="col-md-8 col-md-offset-4">
                                    <button type="submit" class="btn btn-primary">
                                        Update Profile
                                    </button>

                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
