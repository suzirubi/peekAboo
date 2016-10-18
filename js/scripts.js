$(document).ready(function() {
  $(".clickable").click(function() {
    $("#initially-hidden").fadeToggle(600);
    $("#initially-showing").fadeToggle(600);
  });
});
