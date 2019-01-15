import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import { Tamagotchi } from './tamagotchi.js';
let pet = new Tamagotchi("Chip");

$(document).ready(function() {
  $("#time_output").text(0);
  pet.setHunger();
  pet.setPlay();
  pet.setSleep();
  $("button#input_feed").on('click', function(event){
    event.preventDefault();
    pet.feed();
  });
  $("button#input_sleep").on('click', function(event){
    event.preventDefault();
    pet.sleep();
  });
  $("button#input_play").on('click', function(event){
    event.preventDefault();
    pet.play();
  });
  });


setInterval(function(){
  //Write code here that is suppossed to occur every 1 second:
  $("#time_output").text(Date());
  $("#food_output").text(pet.foodLevel);
  $("#sleep_output").text(pet.sleepLevel);
  $("#fun_output").text(pet.playLevel);
  $("#dead_output").text(pet.isDead);
  $("#cranky_output").text(pet.isCranky);
  $("#bored_output").text(pet.isBored);
  //End code block
  }, 1000);
