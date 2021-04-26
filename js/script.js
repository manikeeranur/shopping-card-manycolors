$(".black").click(function () {
  $("img").attr("src", "./images/watches_black.png");
  $(".black").addClass("box-border");
  $(".blue").removeClass("box-border");
  $(".green").removeClass("box-border");
  $(".red").removeClass("box-border");
  $(".yellow").removeClass("box-border");
});

$(".blue").click(function () {
  $("img").attr("src", "./images/watches_blue.png");
  $(".black").removeClass("box-border");
  $(".blue").addClass("box-border");
  $(".green").removeClass("box-border");
  $(".red").removeClass("box-border");
  $(".yellow").removeClass("box-border");
});

$(".green").click(function () {
  $("img").attr("src", "./images/watches_green.png");
  $(".black").removeClass("box-border");
  $(".blue").removeClass("box-border");
  $(".green").addClass("box-border");
  $(".red").removeClass("box-border");
  $(".yellow").removeClass("box-border");
});

$(".red").click(function () {
  $("img").attr("src", "./images/watches_red.png");
  $(".black").removeClass("box-border");
  $(".blue").removeClass("box-border");
  $(".green").removeClass("box-border");
  $(".red").addClass("box-border");
  $(".yellow").removeClass("box-border");
});

$(".yellow").click(function () {
  $("img").attr("src", "./images/watches_yellow.png");
  $(".black").removeClass("box-border");
  $(".blue").removeClass("box-border");
  $(".green").removeClass("box-border");
  $(".red").removeClass("box-border");
  $(".yellow").addClass("box-border");
});
