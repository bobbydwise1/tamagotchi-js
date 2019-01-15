import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import { Tamagotchi } from './tamagotchi.js';

$(document).ready(function() {
  $("#time_output").text(0);
});

setInterval(function(){
  alert("Hello!  This should pop up every 20 seconds!");
}, 20000);

setInterval(function(){
  $("#time_output").text(function(i, oldval) {
    return ++oldval;});
}, 1000);
