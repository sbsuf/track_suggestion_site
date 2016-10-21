$(document).ready(function() {
  $("form").submit(function(event) {
    var answer1 = $("#coding").val();
    $(".ruby").text(answer1);
    $("#ruby").toggle();
    //var music = $("input:radio[name=genre]:checked").val();
    //$(".third").text(music);
    event.preventDefault();
  });
});
