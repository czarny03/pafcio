
$(document).ready(function(){
  $("#tak_btn_wrapper").hover(function(){
    $("#tak_btn").css("position", "relative");
    $("#tak_btn").css("left", "-200px;");
    }, function(){
    $("#tak_btn").css("position", "inherit");
  });
});
