import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import { Tamagotchi } from './tamagotchi.js';

$(document).ready(function() {
  $("#time_output").text(0);
});

let pet = new Tamagotchi("Chip");
console.log(pet.name)
// setInterval(function(){
//   pet.setHunger();
//   //Write code here that is suppossed to occur every 1 second:
//   $("#time_output").text(Date());
//   console.log("sleep level:", pet.sleepLevel);
//
//
//
//   //End code block
// }, 1000);
