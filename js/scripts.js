var add = function(ans1, ans2, ans3, ans4, ans5, ans6) {
  return ans1 + ans2 + ans3 + ans4 + ans5 + ans6;
}
$(document).ready(function() {
  $("form").submit(function(event) {
    var ans1 = parseInt($("#exp").val());
    var ans2 = parseInt($("#lan").val());
    var ans3 = parseInt($("#sty").val());
    var ans4 = parseInt($("#med").val());
    var ans5 = parseInt($("#mac").val());
    var ans6 = parseInt($("#smt").val());

    var finalAns = add(ans1, ans2, ans3, ans4, ans5, ans6);

    if (finalAns <= 6) {
      result = "You will like ruby";
    }
    else if (finalAns > 6 && finalAns <= 12) {
      result = "you will like PHP";
    }
    else if (finalAns > 12 && finalAns <= 18) {
      result = "you will like java";
    }

    else {
      alert("you sucks!");
    }

    $(".rec").text(result);

    //var music = $("input:radio[name=genre]:checked").val();
    //$(".third").text(music);
    event.preventDefault();
  });
});
