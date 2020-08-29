// closes navbar when link is clicked
$(".navbar-nav>a").on("click", function () {
  $(".navbar-collapse").collapse("hide");
  burger.classList.remove("open");
  open = false;
});
// adds a class to toggler for animations
const burger = document.querySelector(".navbar-toggler");
var firstOpen = false;
burger.addEventListener("click", function () {
  if (!firstOpen) {
    burger.classList.add("open");
    firstOpen = true;
  } else if (burger.classList.contains("collapsed")) {
    burger.classList.add("open");
  } else {
    burger.classList.remove("open");
  }
});
