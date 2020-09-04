// smooth scrolling


// closes navbar when link is clicked
$(".navbar-nav>a").on("click", function () {
  $(".navbar-collapse").collapse("hide");
  burger.classList.remove("open");
  mainNav.classList.remove("initialNav");
  open = false;
});
// adds a class to toggler for animations
const burger = document.querySelector(".navbar-toggler");
const mainNav = document.querySelector("#mainNav");
var firstOpen = false;
burger.addEventListener("click", function () {
  if (!firstOpen) {
    burger.classList.add("open");
    firstOpen = true;
    mainNav.classList.add("initialNav");
    
  } else if (burger.classList.contains("collapsed")) {
    burger.classList.add("open");
    mainNav.classList.add("initialNav");

  } else {
    burger.classList.remove("open");
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

// calculators

// array containing wire sizes from smallest to largest
const wiresMm2 = [
   2.08,
   3.31,
   5.26,
   8.37,
   13.3,
   21.2,
   26.7,
   33.6,
   42.4,
   53.5,
   67.4,
   85,
   107,
   127,
   152,
   177,
   203,
   228,
   253,
   279,
   304,
   329,
   355,
   380,
   405,
   456,
];
// array containing readable wire sizes matching wiresMm2 array
const wiresRead = [
  "#14",
  "#12",
  "#10",
  "#8",
  "#6",
  "#4",
  "#3",
  "#2",
  "#1",
  "1/0",
  "2/0",
  "3/0",
  "4/0",
  "250 kcmil",
  "300 kcmil",
  "350 kcmil",
  "400 kcmil",
  "450 kcmil",
  "500 kcmil",
  "550 kcmil",
  "600 kcmil",
  "650 kcmil",
  "700 kcmil",
  "750 kcmil",
  "800 kcmil",
  "900 kcmil"
];
// two-dimensional array for Resistance of conductor
const k = [];
// conversion number 
const special = 0.000507;

// first calculator
// extract values from inputs
// unit of measure
var unit1 = document.querySelector("#unit1");
var units1;
unit1.addEventListener("change", () => {
  units = unit1.value;
});
// wire type
var type1 = document.querySelector("#type1");
var types1;
type1.addEventListener("change", () => {
  types1 = type1.value;
})
// load
var load1 = document.querySelector("#load1");
var loads1;
load1.addEventListener("change", () => {
  loads1 = Number(load1.value);
})
// length
var length1 = document.querySelector("#length1");
var lengths1;
length1.addEventListener("change", () => {
  lengths1 = Number(length1.value);
})
// voltage
var volt1 = document.querySelector("#volt1");
var volts1;
volt1.addEventListener("change", () => {
  volts1 = Number(volt1.value);
})
// voltage drop
var drop1 = document.querySelector("#drop1");
var drops1;
drop1.addEventListener("change", () => {
  drops1 = Number(drop1.value);
})

var calculate1 = document.querySelector("#calculate1");
// allowable voltage drop
var vDrop = 0;
calculate1.addEventListener("click", () => {
  vDrop = Number((volts1 * drops1).toFixed(2));
})