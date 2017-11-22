@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-12">
            <div class="error-template">
                <h1>
                    Oops!</h1>
                <h2>
                    404 Not Found</h2>
                <div class="error-details">
                    Sorry, an error has occured, Requested page not found!
                </div>
                <div class="error-actions">
                    <a href="{{ route('/') }}" class="btn btn-primary btn-lg"><span class="fa fa-home"></span>
                        Take Me Home 
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>

<style type="text/stylesheet">
.error-template {
          padding: 40px 15px;
          text-align: center;
 }
.error-actions {
          margin-top:15px;
          margin-bottom:15px;
}
.error-actions .btn {
            margin-right:10px; 
 }
</style> 
@endsection
