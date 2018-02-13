<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" style="margin: 0;padding: 0;font-family: &quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;font-size: 100%;line-height: 1.6;">
<head style="margin: 0;padding: 0;font-family: &quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;font-size: 100%;line-height: 1.6;">
<meta name="viewport" content="width=device-width" style="margin: 0;padding: 0;font-family: &quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;font-size: 100%;line-height: 1.6;">
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" style="margin: 0;padding: 0;font-family: &quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;font-size: 100%;line-height: 1.6;">
<title style="margin: 0;padding: 0;font-family: &quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;font-size: 100%;line-height: 1.6;">DevComm - A directory of Nigerian techies passionate about community.</title>
</head>

<body bgcolor="#f6f6f6" style="margin: 0;padding: 0;font-family: &quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;font-size: 100%;line-height: 1.6;background-color: #e4e4e4;-webkit-font-smoothing: antialiased;-webkit-text-size-adjust: none;height: 100%;width: 100% !important;">
<table class="body-wrap" style="margin: 0;padding: 20px;font-family: &quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;font-size: 100%;line-height: 1.6;width: 100%;">
<tr style="margin: 0;padding: 0;font-family: &quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;font-size: 100%;line-height: 1.6;">
<td style="margin: 0;padding: 0;font-family: &quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;font-size: 100%;line-height: 1.6;"></td>
<td class="container" bgcolor="#FFFFFF" style="margin: 0 auto !important;padding: 20px;font-family: &quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;font-size: 100%;line-height: 1.6;border: 1px solid #f0f0f0;display: block !important;max-width: 600px !important;clear: both !important;">
    <div class="content" style="margin: 0 auto;padding: 0;font-family: &quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;font-size: 100%;line-height: 1.6;max-width: 600px;display: block;">
        <table style="margin: 0;padding: 0;font-family: &quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;font-size: 100%;line-height: 1.6;width: 100%;">
            <tr style="margin: 0;padding: 0;font-family: &quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;font-size: 100%;line-height: 1.6;">
                <td align="center" style="margin: 0;padding: 0;font-family: &quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;font-size: 100%;line-height: 1.6;">
                    <img src="{{ asset('images/logo.png') }}" alt="DevComm.co" style="margin: 0;padding: 0;font-family: &quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;font-size: 100%;line-height: 1.6;width: 15%;min-width:80px;">
                </td>
            </tr>
            <tr style="margin: 0;padding: 0;font-family: &quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;font-size: 100%;line-height: 1.6;">
                <td style="margin: 0;padding: 0;font-family: &quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;font-size: 100%;line-height: 1.6;">

                    <h1 style="margin: 40px 0 10px;padding: 0;font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, &quot;Lucida Grande&quot;, sans-serif;font-size: 25px;line-height: 1.2;margin-bottom: 15px;color: #000;font-weight: 200;">Hello,</h1>

                    <p style="margin: 0;padding: 0;font-family: &quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;font-size: 14px;line-height: 1.6;margin-bottom: 10px;font-weight: normal;">We have received a new promotion you might be interested in.</p>

                    <p style="margin: 0;padding: 0;font-family: &quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;font-size: 14px;line-height: 1.6;margin-bottom: 10px;font-weight: normal;">Please find details below:</p>

                        <p><b> {{ $promotion->title }}</b></p>
                        <p> {!! nl2br($promotion->content) !!}</p>
                        <p><b>RSVP URL:</b> {{ $promotion->rsvp_url }}</p>
                        <p><b>Organizer:</b> {{ $promotion->name }}</p>
                        <img src="{{$promotion->attachment}}" alt="{{ $promotion->title }}" style="max-width:100%;height:auto;"/>
                </td>
            </tr>
        </table>
    </div>
</td>
<td style="margin: 0;padding: 0;font-family: &quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;font-size: 100%;line-height: 1.6;"></td>
</tr>
</table>
<table class="footer-wrap" style="margin: 0;padding: 0;font-family: &quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;font-size: 100%;line-height: 1.6;width: 100%;clear: both !important;">
<tr style="margin: 0;padding: 0;font-family: &quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;font-size: 100%;line-height: 1.6;">
<td style="margin: 0;padding: 0;font-family: &quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;font-size: 100%;line-height: 1.6;"></td>
<td class="container" style="margin: 0 auto !important;padding: 0;font-family: &quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;font-size: 100%;line-height: 1.6;display: block !important;max-width: 600px !important;clear: both !important;">
    <div class="content" style="margin: 0 auto;padding: 0;font-family: &quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;font-size: 100%;line-height: 1.6;max-width: 600px;display: block;">
        <table style="margin: 0;padding: 0;font-family: &quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;font-size: 100%;line-height: 1.6;width: 100%;">
            <tr style="margin: 0;padding: 0;font-family: &quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;font-size: 100%;line-height: 1.6;">
                <td align="center" style="margin: 0;padding: 0;font-family: &quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;font-size: 100%;line-height: 1.6;">
                    <!-- <p>Email Footer</p> -->

                    <p style="margin: 0;padding: 0;font-family: &quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;font-size: 12px;line-height: 1.6;margin-bottom: 10px;font-weight: normal;color: #666;"><strong style="margin: 0;padding: 0;font-family: &quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;font-size: 100%;line-height: 1.6;">You are receiving this mail because you are signed up on Devcomm.co</strong></p>
                </td>
            </tr>
        </table>
    </div>
</td>
<td style="margin: 0;padding: 0;font-family: &quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;font-size: 100%;line-height: 1.6;"></td>
</tr>
</table>
</body>
</html>