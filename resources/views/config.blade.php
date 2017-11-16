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

                    You are logged in!
                </div>
            </div>
            <div id="config">
                <form class="form-horizontal" method="POST" action="{{ route('config') }}">
                    {{ csrf_field() }}
                    <img src="{{ Auth::user()->avatar }}" />
                    <div class="form-group{{ $errors->has('alias') ? ' has-error' : '' }}">
                        <label for="alias" class="col-md-4 control-label">Alias</label>

                        <div class="col-md-6">
                            <input id="name" type="text" class="form-control" name="alias" value="{{ old('alias') }}" required autofocus>

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
                </form>
            </div>
        </div>
    </div>
</div>
@endsection
