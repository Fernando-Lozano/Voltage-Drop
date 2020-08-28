// closes navbar when link is clicked
$('.navbar-nav>a').on('click', function () {
  $('.navbar-collapse').collapse('hide');
});
const burger = document.querySelector(".navbar-toggler");
var open = false;
burger.addEventListener("click", () => {
  if (!open) {
    burger.classList.add("open");
    open = true;
  }
  else {
    burger.classList.remove("open");
    open = false;
  }
});