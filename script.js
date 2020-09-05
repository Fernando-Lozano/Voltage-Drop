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
// two-dimensional array for Resistance of conductor: index 0 for copper , index 1 for aluminum
const k = [
  [10.8, 35],
  [17, 55.7]
];
// conversion number 
const special = 0.000507;

// first calculator
// extract values from inputs
var unit1 = document.querySelector("#unit1");
var type1 = document.querySelector("#type1");
var load1 = document.querySelector("#load1");
var length1 = document.querySelector("#length1");
var volt1 = document.querySelector("#volt1");
var drop1 = document.querySelector("#drop1");
var calculate1 = document.querySelector("#calculate1");
var  answer1 = document.querySelector("#result1");
var reset1 = document.querySelector("#reset1");
// store inputs on calculate
var units1;
var types1;
var loads1;
var lengths1;
var volts1;
var drops1;
var vDrop1;
var k1;
var mm1;
var answers1;
calculate1.addEventListener("click", () => {
  units1 = Number(unit1.value);
  types1 = Number(type1.value);
  loads1 = Number(load1.value);
  lengths1 = Number(length1.value);
  volts1 = Number(volt1.value);
  drops1 = Number(drop1.value);
  vDrop1 = Number((volts1 * drops1).toFixed(2));
  k1 = k[types1][units1];
  mm1 = (((loads1 * lengths1 * 2 * k1) / vDrop1) * special).toFixed(4);
  answers1 = findAnswer(mm1);
  answer1.textContent = answers1;
});
reset1.addEventListener("click", () => {
  unit1.value = "";
  type1.value = "";
  load1.value = "";
  length1.value = "";
  volt1.value = "";
  drop1.value = "";
  answer1.textContent = "0";
});
// search array to find wire size
function findAnswer(mm) {
  for (let i = 0; i < wiresMm2.length; i++) {
    if (mm < wiresMm2[i]) {
      return wiresRead[i];
    }
    else if (mm > wiresMm2[i] && mm <= wiresMm2[i + 1]) {
      return wiresRead[i + 1];
    }
  }
  return "invalid";
}