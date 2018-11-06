
var healthCounter = 3;

$(document).ready(function () {
  $("#room0").slideDown(7000);

  $("#room0toRoom1").click(function() {
    $(".room").hide();
    $("#room1").slideDown(17000);
  });

  $("#GameOver").click(function() {
    $(".room").hide();
    $("#gameOver").slideDown(17000);
  });

  $("#gameOverToRoom0").click(function() {
    $(".room").hide();
    $("#room0").slideDown(17000);
  });
  
  $("#room1toRoom2").click(function() {
    $(".room").hide();
    $("#room2").slideDown(17000);
  });

  $("#room1toRoom2-damage").click(function() {
    $(".room").hide();
    $("#room2-damage").slideDown(7000);
    healthCounter--;
  });

  $("#room2toRoom3").click(function() {
    $(".room").hide();
    $("#room3").fadeIn(1500);
  });

  $("#room2toRoom3-damage").click(function() {
    $(".room").hide();
    $("#room3-damage").fadeIn(1500);
    healthCounter--;
  });

  $("#room3toRoom4").click(function() {
    $(".room").hide();
    $("#room4").fadeIn(1500);
  });


});


