$(".one").click(function() {
    $(".two").delay(5000).fadeIn();
    $(".direction1").delay(5000).fadeIn();
});

$(".two").hover(function() {
    $(".three").show();
    $(".direction2").show();

});

$(".three").mouseleave(function() {
    $(".four").slideDown();
    $(".hold").show();
});

$(".hold").click(function() {
    $(".surprise").delay(6000).toggle();
});

$("h1").click(function() {
    $("h1").text("almost there, double click this");
});

$("h1").dblclick(function() {
    $(".top").attr("src", "https://media.giphy.com/media/3oFzmiMu3v4LIXpJBK/giphy.gif").delay(-0.1);
    $(".last").show();
});

$(".top").click(function() {
    $(".top").attr("src", "https://i.imgur.com/ldUxcEN.gif").delay(-0.1);
    $(".done").show();
    $(".whole").hide();
    $("body").css("background","#D4D46D");
});

