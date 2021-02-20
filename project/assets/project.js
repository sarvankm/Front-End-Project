function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
function sname() {
  if (screen.width <= 768) {
    document.querySelector(".icon2").setAttribute("src", "./assets/qw.png");
  }
}
sname();
