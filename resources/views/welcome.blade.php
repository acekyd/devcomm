<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Dev Community - DevComm.co</title>
        <link href="{{asset('css/app.css')}}" rel="stylesheet" type="text/css">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <link rel="shortcut icon" type="image/png" href="{{ asset('images/logo.png') }}"/>
        <meta name="twitter:card" content="summary_large_image">
        <meta name="twitter:site" content="@ace_kyd">
        <meta name="twitter:title" content="DevComm - DevComm.co">
        <meta name="twitter:description" content="Identify and connect with members of the community around you and get access to opportunities and event information regardless of where you are.">
        <meta name="twitter:creator" content="@ace_kyd">
        <meta name="twitter:image" content="{{ asset('images/header.jpg') }}">
        <meta name="twitter:domain" content="devcomm.co">
    </head>
    <body>
        <div id="app"></div>
        <script src="{{asset('js/app.js')}}" ></script>
        <footer class="footer">
            &spades; &copy DevComm 2017. Inspired by <a href="http://tribute.imogiemubarak.com" target="_blank">#AIM</a>. Contribute on <a href="https://github.com/acekyd/devcomm" target="_blank">GitHub</a>
        </footer>
    </body>
</html>