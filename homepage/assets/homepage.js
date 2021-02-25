const card = document.querySelectorAll(".card");
const firstView = document.querySelectorAll(".firstView");
const cardPart = document.querySelectorAll(".cardPart");

card.forEach((item) => {
  item.addEventListener("mouseenter", (e) => {
    item.childNodes[1].classList.add("display");
    item.lastChild.previousSibling.classList.add("display-none");
  });
});
card.forEach((item) => {
  item.addEventListener("mouseleave", (e) => {
    item.childNodes[1].classList.remove("display");
    item.lastChild.previousSibling.classList.remove("display-none");
  });
});
$(".fixed").on("click", function () {
  $(window).scrollTop(0);
});
$(".textButton1").on("click", function () {
  $(".buttonContainer").fadeIn(500);

  $(
    ".buttonContainer.first,.buttonContainer.sec,.buttonContainer.third,.buttonContainer.fourth"
  ).fadeOut(0);

  $(".line").fadeOut(500);
  $(".line3").fadeOut(500);
  $(".line2").fadeIn(500);
});
$(".textButton2").on("click", function () {
  $(".buttonContainer").fadeOut(500);
  $(
    ".buttonContainer.first,.buttonContainer.sec,.buttonContainer.third,.buttonContainer.fourth"
  ).fadeIn(500);
  $(".line").fadeOut(500);
  $(".line3").fadeIn(500);
  $(".line2").fadeOut(500);
});
$(".forline").on("click", function () {
  $(".buttonContainer").fadeIn(500);
  $(".line").fadeIn(500);
  $(".line3").fadeOut(500);
  $(".line2").fadeOut(500);
});
$(".firstTabList ul li").on("click", function (index) {
  var a = $(this).index();
  var b = $(".secondTabList li");
  $.each(b, function (i) {
    if (i == a) {
      b.text("<=");
      $(this).text("=>");
    }
  });
  $(".paragraph").fadeOut(500);
  $(".paragraph").fadeIn(500);
});
