import "../scss/main.scss";

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

console.log("HELLO 🚀");

// VARIABLES //

//
const buttons = document.querySelector(".buttons--js");

// numbers
const nine = document.querySelector(".numbers__nine--js");
const eight = document.querySelector(".numbers__eight--js");
const seven = document.querySelector(".numbers__seven--js");
const six = document.querySelector(".numbers__six--js");
const five = document.querySelector(".numbers__five--js");
const four = document.querySelector(".numbers__four--js");
const three = document.querySelector(".numbers__three--js");
const two = document.querySelector(".numbers__two--js");
const one = document.querySelector(".numbers__one--js");
const zero = document.querySelector(".numbers__zero--js");
const dot = document.querySelector(".numbers__dot--js");

// actions
const del = document.querySelector(".numbers__delete--js");
const plus = document.querySelector(".numbers__plus--js");
const minus = document.querySelector(".numbers__minus--js");
const multiply = document.querySelector(".numbers__multiply--js");
const divide = document.querySelector(".numbers__divide--js");
const reset = document.querySelector(".actions__reset--js");
const equal = document.querySelector(".actions__equal--js");

// result
const result = document.querySelector(".result__number--js");

function displayNumber(event) {
    if (event.target.value.length < 2) {
      if (result.innerHTML == "0") {
          result.innerHTML = event.target.value;
        if (result.innerHTML == "") {
          result.innerHTML = "0";
        }
      } else {
        result.innerHTML += event.target.value;
      }
    }
  }

// listen for click
buttons.addEventListener("click", (event) => {
  if (event.target.nodeName == "BUTTON") {
    let firstNumber;
    let secondNumber = 0;
    let operation = "";
    let calculationResult = 0;
    
    displayNumber(event);
  }
});
