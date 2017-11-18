@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-8 col-md-offset-2">
            <div class="panel panel-default">
                <div class="panel-heading">Promote an Event</div>

                <div class="panel-body">
                    @if (session('status'))
                        <div class="alert alert-success">
                            {{ session('status') }}
                        </div>
                    @endif

                    <div id="config">
                        <form class="form-horizontal" method="POST" action="{{ route('promote.submit') }}">
                            {{ csrf_field() }}
                            
                            <div class="form-group{{ $errors->has('name') ? ' has-error' : '' }}">
                                <label for="name" class="col-md-4 control-label">Your Name</label>

                                <div class="col-md-6">
                                    <input id="name" type="text" class="form-control" name="name" value="{{ old('name') ?? Auth::user()->name }}" placeholder="e.g. Abati Adewale" required autofocus>

                                    @if ($errors->has('name'))
                                        <span class="help-block">
                                            <strong>{{ $errors->first('name') }}</strong>
                                        </span>
                                    @endif
                                </div>
                            </div>

                            <div class="form-group{{ $errors->has('email') ? ' has-error' : '' }}">
                                <label for="email" class="col-md-4 control-label">Your Email</label>

                                <div class="col-md-6">
                                    <input id="email" type="email" class="form-control" name="email" value="{{ old('email') ?? Auth::user()->email }}" placeholder="e.g. joe@email.com" required >

                                    @if ($errors->has('email'))
                                        <span class="help-block">
                                            <strong>{{ $errors->first('email') }}</strong>
                                        </span>
                                    @endif
                                </div>
                            </div>

                            <div class="form-group{{ $errors->has('title') ? ' has-error' : '' }}">
                                <label for="title" class="col-md-4 control-label">Title</label>

                                <div class="col-md-6">
                                    <input id="title" type="text" class="form-control" name="title" value="{{ old('title') }}" placeholder="e.g. forLoop Developers Gathering" required >

                                    @if ($errors->has('title'))
                                        <span class="help-block">
                                            <strong>{{ $errors->first('title') }}</strong>
                                        </span>
                                    @endif
                                </div>
                            </div>

                            <div class="form-group{{ $errors->has('content') ? ' has-error' : '' }}">
                                <label for="content" class="col-md-4 control-label">Details</label>

                                <div class="col-md-6">

                                    <textarea id="content" name="content" class="form-control" rows="5" placeholder="e.g. Event details" required>
                                        {{ old('content') }}
                                    </textarea>

                                    @if ($errors->has('content'))
                                        <span class="help-block">
                                            <strong>{{ $errors->first('content') }}</strong>
                                        </span>
                                    @endif
                                </div>
                            </div>

                            <div class="form-group{{ $errors->has('attachment') ? ' has-error' : '' }}">
                                <label for="attachment" class="col-md-4 control-label"w >Attachment/Image</label>
                                <div class="col-md-6">
                                    <input type="file" id="attachment" name="attachment">
                                    <p class="help-block">Upload flyer or promotional image.</p>

                                    @if ($errors->has('attachment'))
                                        <span class="help-block">
                                            <strong>{{ $errors->first('attachment') }}</strong>
                                        </span>
                                    @endif
                                </div>
                            </div>

                            <fieldset>
                                <figcaption>Filter Audience</figcaption>
                                <div class="form-group{{ $errors->has('location') ? ' has-error' : '' }}">
                                    <label for="location" class="col-md-4 control-label">Location</label>

                                    <div class="col-md-6">
                                        <select id="location" class="form-control" name="location" required>
                                            <option value="">Choose Location</option>
                                            @foreach(config('data.locations') as $location)
                                                <option value="{{ $location ?? Auth::user()->location }}" {{ ((old("location") == $location) || (Auth::user()->location == $location) ? "selected":"") }}> {{ $location }}</option>
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
                                    <label for="role" class="col-md-4 control-label">Role</label>

                                    <div class="col-md-6">
                                        <select id="role" class="form-control" name="role" required>
                                            <option value="">Choose Role</option>
                                            @foreach(config('devcommroles.roles') as $role)
                                                <option value="{{ $role ?? Auth::user()->role }}" {{ ((old("role") == $role) || (Auth::user()->role == $role) ? "selected":"") }}> {{ $role }}</option>
                                            @endforeach
                                        </select>

                                        @if ($errors->has('role'))
                                            <span class="help-block">
                                                <strong>{{ $errors->first('role') }}</strong>
                                            </span>
                                        @endif
                                    </div>
                                </div>
                            </fieldset>

                            <div class="form-group">

                                <div class="col-md-8 col-md-offset-4">
                                    <button type="submit" class="btn btn-primary">
                                        Create Promotion
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
