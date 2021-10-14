// change square background according to holiday months
const squares = document.querySelectorAll(".mainSquares");
const date = new Date();
const month = date.getMonth();
const holidayIcon = document.querySelector("#holidayIcon");
for (let square of squares) {
  if (month === 0) {
    square.classList.toggle("newYearBg");
  }
  else if (month === 3) {
    square.classList.toggle("easterBg");
  }
  else if (month === 9) {
    square.classList.toggle("halloweenBg");
    holidayIcon.classList.add("fa", "fa-ghost");
    holidayIcon.style.color = "orange";
  }
  else if (month === 11) {
    square.classList.toggle("christmasBg");
  }
  else {
    square.classList.toggle("normalBg");
  }
}

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
const special1 = 0.866;

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
calculate1.addEventListener("click", () => {
  units1 = Number(unit1.value);
  types1 = Number(type1.value);
  loads1 = Number(load1.value);
  lengths1 = Number(length1.value);
  volts1 = Number(volt1.value);
  drops1 = Number(drop1.value);
  vDrop1 = Number((volts1 * drops1).toFixed(2));
  if (!(units1 === -1 || types1 === -1)) {
    k1 = k[types1][units1];
  }
  mm1 = (((loads1 * lengths1 * 2 * k1) / vDrop1) * special).toFixed(4);
  answer1.textContent = findAnswer(mm1);
});
reset1.addEventListener("click", () => {
  unit1.value = "-1";
  type1.value = "-1";
  load1.value = "";
  length1.value = "";
  volt1.value = "";
  drop1.value = "";
  k1 = undefined;
  answer1.textContent = "0";
});
// second calculator
// extract values from inputs
var unit2 = document.querySelector("#unit2");
var type2 = document.querySelector("#type2");
var load2 = document.querySelector("#load2");
var size2 = document.querySelector("#size2");
var volt2 = document.querySelector("#volt2");
var drop2 = document.querySelector("#drop2");
var calculate2 = document.querySelector("#calculate2");
var answer2 = document.querySelector("#result2")
var reset2 = document.querySelector("#reset2");
// store inputs on calculate
var units2;
var types2;
var loads2;
var sizes2;
var volts2;
var drops2;
var vDrops2
var k2;
var cm2;
calculate2.addEventListener("click", () => {
  units2 = Number(unit2.value);
  types2 = Number(type2.value);
  loads2 = Number(load2.value);
  if (size2.value !== "-1") {
    sizes2 = Number(size2.value);
  }
  if (volt2.value !== "-1") {
    volts2 = Number(volt2.value);
  }
  if (drop2.value !== "-1") {
    drops2 = Number(drop2.value);
  }
  vDrops2 = Number((volts2 * drops2).toFixed(2));
  if (!(units2 === -1 || types2 === -1)) {
    k2 = k[types2][units2];
  }
  cm2 = (sizes2 / special).toFixed(4);
  answer2.textContent = findLength(units2, cm2, vDrops2, k2, loads2);
});
reset2.addEventListener("click", () => {
  unit2.value = "-1";
  type2.value = "-1";
  load2.value = "";
  size2.value = "-1";
  volt2.value = "-1";
  drop2.value = "-1";
  k2 = undefined;
  answer2.textContent = "0";
});
// third calculator
// extract values from inputs
var unit3 = document.querySelector("#unit3");
var type3 = document.querySelector("#type3");
var load3 = document.querySelector("#load3");
var length3 = document.querySelector("#length3");
var volt3 = document.querySelector("#volt3");
var drop3 = document.querySelector("#drop3");
var calculate3 = document.querySelector("#calculate3");
var answer3 = document.querySelector("#result3");
var reset3 = document.querySelector("#reset3");
// store inputs on calculate
var units3;
var types3;
var loads3;
var lengths3;
var volts3;
var drops3;
var vDrop3;
var k3;
var mm3;
calculate3.addEventListener("click", () => {
  units3 = Number(unit3.value);
  types3 = Number(type3.value);
  loads3 = Number(load3.value);
  lengths3 = Number(length3.value);
  volts3 = Number(volt3.value);
  drops3 = Number(drop3.value);
  vDrop3 = Number((volts3 * drops3).toFixed(2));
  if (!(units3 === -1 || types3 === -1)) {
    k3 = k[types3][units3];
  }
  mm3 = (((loads3 * lengths3 * 2 * k3 * special1) / vDrop3) * special).toFixed(4);
  answer3.textContent = findAnswer(mm3);
});
reset3.addEventListener("click", () => {
  unit3.value = "-1";
  type3.value = "-1";
  load3.value = "";
  length3.value = "";
  volt3.value = "";
  drop3.value = "";
  k3 = undefined;
  answer3.textContent = "0";
});
// second calculator
// extract values from inputs
var unit4 = document.querySelector("#unit4");
var type4 = document.querySelector("#type4");
var load4 = document.querySelector("#load4");
var size4 = document.querySelector("#size4");
var volt4 = document.querySelector("#volt4");
var drop4 = document.querySelector("#drop4");
var calculate4 = document.querySelector("#calculate4");
var answer4 = document.querySelector("#result4")
var reset4 = document.querySelector("#reset4");
// store inputs on calculate
var units4;
var types4;
var loads4;
var sizes4;
var volts4;
var drops4;
var vDrop4;
var k4;
var cm4;
calculate4.addEventListener("click", () => {
  units4 = Number(unit4.value);
  types4 = Number(type4.value);
  loads4 = Number(load4.value);
  if (size4.value !== "-1") {
    sizes4 = Number(size4.value);
  }
  if (volt4.value !== "-1") {
    volts4 = Number(volt4.value);
  }
  if (drop4.value !== "-1") {
    drops4 = Number(drop4.value);
  }
  vDrops4 = Number((volts4 * drops4).toFixed(2));
  if (!(units4 === -1 || types4 === -1)) {
    k4 = k[types4][units4];
  }
  cm4 = (sizes4 / special).toFixed(4);
  answer4.textContent = findLength(units4, cm4, vDrops4, k4, loads4, special1);
});
reset4.addEventListener("click", () => {
  unit4.value = "-1";
  type4.value = "-1";
  load4.value = "";
  size4.value = "-1";
  volt4.value = "-1";
  drop4.value = "-1";
  k4 = undefined;
  answer4.textContent = "0";
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
function findLength(unit, cm, vDrop, k, load, threeP = 1) {
  let answer;
  let units;
  answer = ((cm * vDrop) / (k * load * 2 * threeP)).toFixed(2);
  if (unit === 0) {
    units = " ft";
  }
  else {
    units = " m";
  }
  if (answer === "NaN") {
    return "invalid";
  }
  else {
    return answer + units;
  }
}