
$(".tiger").click(function(){
    $(".bird1").append("Bring your mouse closer to find out! ");
     $(".bird1").show("Bring your mouse closer to find out! ");
});
$(".bird1").mouseleave(function(){
    $("#hiddenpic").show();
    $(".bird2").show();
});
$("#hiddenpic").dblclick(function(){
    $(".bird1").text("Nice job. You'll find your next clue by clicking on the question mark?");
});
$(".hi").click(function(){
    $("body").css("background", "#06821b");
    $(".bird2").text("One last step double click the word president");
});
$(".style").dblclick(function(){
    $(".horay").fadeIn();
    $(".bird1 ").hide();
    $(".bird2 ").hide();
    $(".hi ").hide();
    $(".tiger ").hide();
    $(".style").hide();
    $("#hiddenpic ").hide();
    $(".it").show();
});

    