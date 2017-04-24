$(document).ready(function() {
  var rock = 1;
  var paper = 2;
  var scissors = 3;
  var cpuScore = 0;
  var pScore = 0;
  $("#rock").on("click", function() {
    var cpu = Math.floor((Math.random() * 3) + 1);
    if (cpu == 1) {
      $("#comp-choice").html("<button class='btn btn-primary btn-block' id='comp-choice'>Rock</button>");
      $("#winner").html("<button class='btn btn-primary btn-block' id='winner'>Tie</button>");
    } else if (cpu == 2) {
      $("#comp-choice").html("<button class='btn btn-primary btn-block' id='comp-choice'>Paper</button>");
      $("#winner").html("<button class='btn btn-primary btn-block' id='winner'>Computer</button>");
      cpuScore += 1;
    } else {
      $("#comp-choice").html("<button class='btn btn-primary btn-block' id='comp-choice'>Scissors</button>");
      $("#winner").html("<button class='btn btn-primary btn-block' id='winner'>Player</button>");
      pScore += 1;
    }
    $("#score").html("<h1 class = 'text-center text-primary number' id='score'>" + pScore + " : " + cpuScore + "</h1>")
  });
  $("#paper").on("click", function() {
    var cpu = Math.floor((Math.random() * 3) + 1);
    if (cpu == 1) {
      $("#comp-choice").html("<button class='btn btn-primary btn-block' id='comp-choice'>Rock</button>");
      $("#winner").html("<button class='btn btn-primary btn-block' id='winner'>Human</button>");
      pScore += 1;
    } else if (cpu == 2) {
      $("#comp-choice").html("<button class='btn btn-primary btn-block' id='comp-choice'>Paper</button>");
      $("#winner").html("<button class='btn btn-primary btn-block' id='winner'>Tie</button>");
    } else {
      $("#comp-choice").html("<button class='btn btn-primary btn-block' id='comp-choice'>Scissors</button>");
      $("#winner").html("<button class='btn btn-primary btn-block' id='winner'>Computer</button>");
      cpuScore += 1;
    }
    $("#score").html("<h1 class = 'text-center text-primary number' id='score'>" + pScore + " : " + cpuScore + "</h1>")
  });
  $("#scissors").on("click", function() {
    var cpu = Math.floor((Math.random() * 3) + 1);
    if (cpu == 1) {
      $("#comp-choice").html("<button class='btn btn-primary btn-block' id='comp-choice'>Rock</button>");
      $("#winner").html("<button class='btn btn-primary btn-block' id='winner'>Computer</button>");
      cpuScore += 1;
    } else if (cpu == 2) {
      $("#comp-choice").html("<button class='btn btn-primary btn-block' id='comp-choice'>Paper</button>");
      $("#winner").html("<button class='btn btn-primary btn-block' id='winner'>Human</button>");
      pScore += 1;
    } else {
      $("#comp-choice").html("<button class='btn btn-primary btn-block' id='comp-choice'>Scissors</button>");
      $("#winner").html("<button class='btn btn-primary btn-block' id='winner'>Tie</button>");
    }
    $("#score").html("<h1 class = 'text-center text-primary number' id='score'>" + pScore + " : " + cpuScore + "</h1>")
  });
});
