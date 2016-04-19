//Import Jquery
import jQuery from 'jquery';
//use $ instead of jQuery
window.$ = jQuery;
import home from './home';

$(document).ready(() => {
    new home({
        "name":  "Mayank"
    });
});
