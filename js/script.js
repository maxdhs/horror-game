
var healthCounter = 3;

$(document).ready(function () {
  $("#room0").fadeIn(1500);

  $("#room0toRoom1").click(function() {
    $(".room").hide();
    $("#room1").fadeIn(1500);
  });

  $("#GameOver").click(function() {
    $(".room").hide();
    $("#gameOver").fadeIn(1500);
  });

  $("#gameOverToRoom0").click(function() {
    $(".room").hide();
    $("#room0").fadeIn(1500);
  });
  
  $("#room1toRoom2").click(function() {
    $(".room").hide();
    $("#room2").fadeIn(1500);
  });

  $("#room1toRoom2-damage").click(function() {
    $(".room").hide();
    $("#room2-damage").fadeIn(1500);
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


