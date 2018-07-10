$(document).ready(function() {
  $("#leap-year").submit(function(event) {
    event.preventDefault();
    var year = parseInt($("input#year").val());
    console.log(year);
    var result = leapYear(year);
    $("#result").text(result);
  });
});

var leapYear = function(year) {
    return false;
  };

//jQuery user interface logic
