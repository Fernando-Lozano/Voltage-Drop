const iconBars = document.querySelectorAll(".icon-bar");

// closes navbar when link is clicked
$(".navbar-nav>a").on("click", function () {
    $(".navbar-collapse").collapse("hide");
    burger.classList.remove("open");
    mainNav.classList.remove("initialNav");
    for (bar of iconBars) {
        bar.classList.toggle("flicker");
    }
    open = false;
});

// adds a class to toggler for animations
const burger = document.querySelector(".navbar-toggler");
const mainNav = document.querySelector("#mainNav");
const collapsing = document.querySelector("#navbarNavAltMarkup");
var firstOpen = false;
burger.addEventListener("click", function () {
    if (!firstOpen) {
        burger.classList.add("open");
        for (bar of iconBars) {
            bar.classList.toggle("flicker");
        }
        firstOpen = true;
        mainNav.classList.add("initialNav");

    } else if (burger.classList.contains("collapsed") && !(collapsing.classList.contains("collapsing"))) {
        burger.classList.add("open");
        for (bar of iconBars) {
            bar.classList.toggle("flicker");
        }
        mainNav.classList.add("initialNav");

    } else if (!(collapsing.classList.contains("collapsing"))) {
        burger.classList.remove("open");
        for (bar of iconBars) {
            bar.classList.toggle("flicker");
        }
        mainNav.classList.remove("initialNav");

    }
});

// change nav color when scrolling
$(function () {
    $(document).scroll(function () {
        var $nav = $("#mainNav");
        $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    });
});