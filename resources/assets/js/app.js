
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

require('./bootstrap');


import React from 'react';
import ReactDom from 'react-dom';
import ReactGA from 'react-ga';

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */


import { Routes } from './config';
ReactGA.initialize('UA-111097304-1');
ReactGA.pageview(window.location.pathname + window.location.search);

ReactDom.render(<Routes />, document.getElementById('app'));