<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Dev Community - DevComm.co</title>
        <link href="{{asset('css/app.css')}}" rel="stylesheet" type="text/css">
        <meta name="csrf-token" content="{{ csrf_token() }}">
    </head>
    <body>
        <div id="app"></div>
        <script src="{{asset('js/app.js')}}" ></script>
        <footer class="footer">
            &spades; &copy DevComm 2017. Inspired by <a href="http://tribute.imogiemubarak.com" target="_blank">#AIM</a>. 
        </footer>
    </body>
</html>