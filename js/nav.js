const iconBars = document.querySelectorAll(".icon-bar");
const burger = document.querySelector(".navbar-toggler");
const collapsable = document.querySelector(".collapse");
const navLinks = document.querySelectorAll(".nav-link");

collapsable.addEventListener('show.bs.collapse', toggleNavBtn);
collapsable.addEventListener('hide.bs.collapse', toggleNavBtn);
// from bootstrap docs
let collapeElement = new bootstrap.Collapse(collapsable, { toggle: false});

// closes navbar when link is clicked
navLinks.forEach(element => {
    element.addEventListener("click", () => {
        collapeElement.hide();
    });
});
function toggleNavBtn() {
    burger.classList.toggle("open");
    for (bar of iconBars) {
        bar.classList.toggle("flicker");
    }
}