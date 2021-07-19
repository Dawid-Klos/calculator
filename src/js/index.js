import "../scss/main.scss";

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

const calculator = {
  currentDisplay: "0",
  firstNumber: null,
  waitingForSecondNumber: false,
  operation: null,
};

function updateResultOnDisplay() {
  const display = document.querySelector(".result__number--js");
  display.innerHTML = calculator.currentDisplay;
}
updateResultOnDisplay();

function calculate(operation, firstNumber, secondNumber) {
  switch (operation) {
    case "+":
      calculator.currentDisplay = Number(firstNumber) + Number(secondNumber);
      updateResultOnDisplay();
      calculator.currentDisplay = 0;
      calculator.firstNumber = 0;
      calculator.waitingForSecondNumber = false;
      break;
    case "-":
      calculator.currentDisplay = Number(firstNumber) - Number(secondNumber);
      updateResultOnDisplay();
      calculator.currentDisplay = 0;
      calculator.firstNumber = 0;
      calculator.waitingForSecondNumber = false;
      break;
    case "*":
      calculator.currentDisplay = Number(firstNumber) * Number(secondNumber);
      updateResultOnDisplay();
      calculator.currentDisplay = 0;
      calculator.firstNumber = 0;
      calculator.waitingForSecondNumber = false;
      break;
    case "/":
      calculator.currentDisplay = Number(firstNumber) / Number(secondNumber);
      updateResultOnDisplay();
      calculator.currentDisplay = 0;
      calculator.firstNumber = 0;
      calculator.waitingForSecondNumber = false;
      break;
  }
}


// Listening for click and handling operations
const buttons = document.querySelector(".buttons--js");

buttons.addEventListener("click", (event) => {
  const { target } = event;

  if (!target.matches("button")) {
    return;
  }

  if (target.classList.contains("digit")) {
    
    if (calculator.currentDisplay.includes('.') && target.value == ".") {
      console.log("1");
      return;
    }

    if (calculator.currentDisplay == "0" && target.value == ".") {
      console.log("2");
      target.value = "0.";
    }

    if (calculator.currentDisplay == "0" && target.value == "0") {
      calculator.currentDisplay = "0";
      console.log("3");
      updateResultOnDisplay();
      return;
    }

    if (calculator.currentDisplay == "0" && target.value !== "0") {
      console.log("4");
      calculator.currentDisplay = target.value;
    } else {
      calculator.currentDisplay += target.value;
      console.log("4");
    }

    updateResultOnDisplay();
    return;
  }

  if (target.classList.contains("operation")) {
    if (target.value == "=") {
      calculate(
        calculator.operation,
        calculator.firstNumber,
        calculator.currentDisplay
      );
    } else {
      calculator.firstNumber = calculator.currentDisplay;
      calculator.currentDisplay = "0";
      updateResultOnDisplay();
      calculator.waitingForSecondNumber = true;
      calculator.operation = target.value;
    }
    return;
  }

  if (target.classList.contains("clear")) {

    if (calculator.currentDisplay.length == 1) {
      calculator.currentDisplay = 0;
    } else {
      calculator.currentDisplay = calculator.currentDisplay.slice(0, -1);
    }
    updateResultOnDisplay();
    return;
  }

  if (target.classList.contains("reset")) {
    calculator.currentDisplay = "0";
    updateResultOnDisplay();
    return;
  }
});

// Theme changing

const theme = document.querySelector(".theme--js");
const body = document.querySelector(".body");
const display = document.querySelector(".result");
const allBtn = document.querySelectorAll(".btn");
const btnDel = document.querySelector(".btn-del");
const btnReset = document.querySelector(".btn-reset");
const btnEqual = document.querySelector(".btn-equal");

function changeButtonsStyle(bg, shadow, font) {
  for (let i = 0; i < allBtn.length; i++) {
    allBtn[i].style.background = bg;
    allBtn[i].style.boxShadow = shadow;
    allBtn[i].style.color = font;
  }
}

theme.addEventListener('change' , (event) => {
  switch (event.target.value) {
    case "0":
      body.style.background = "#3b4664";
      body.style.color = "#fffeff";
      theme.style.background = "#252d44";
      display.style.background = "#181f32";
      buttons.style.background = "#252d44";
      changeButtonsStyle("#eae3d9","inset  0px -4px #b2a89e", "#414852");
      btnDel.style.background = "#647299";
      btnDel.style.boxShadow = "inset  0px -4px #495061";
      btnReset.style.background = "#647299";
      btnReset.style.boxShadow = "inset  0px -4px #495061";
      btnEqual.style.background = "#c94431";
      btnEqual.style.boxShadow = "inset  0px -4px #793329";
      btnEqual.style.color = "#fffeff";

      break;
    case "1":
      body.style.background = "#e6e6e6";
      body.style.color = "#34342a";
      theme.style.background = "#d3cdcd";
      display.style.background = "#eeeeee";
      buttons.style.background = "#d3cdcd";
      changeButtonsStyle("#e5e4e0","inset  0px -4px #a69c90", "#414852");
      btnDel.style.background = "#388187";
      btnDel.style.boxShadow = "inset  0px -4px #1a5d66";
      btnReset.style.background = "#388187";
      btnReset.style.boxShadow = "inset  0px -4px #1a5d66";
      btnEqual.style.background = "#c75403";
      btnEqual.style.boxShadow = "inset  0px -4px #893a02";
      btnEqual.style.color = "#fffeff";
      break;
    case "2":
      body.style.background = "#17062a";
      body.style.color = "#ffdf3f";
      theme.style.background = "#1e0836";
      display.style.background = "#1e0836";
      buttons.style.background = "#1e0836";
      changeButtonsStyle("#331b4d","inset  0px -4px #851c9d", "#ffdf3f");
      btnDel.style.background = "#56077c";
      btnDel.style.boxShadow = "inset  0px -4px #bf16f5";
      btnReset.style.background = "#56077c";
      btnReset.style.boxShadow = "inset  0px -4px #bf16f5";
      btnEqual.style.background = "#00decf";
      btnEqual.style.boxShadow = "inset  0px -4px #6ef7ef";
      btnEqual.style.color = "black";
      break;
  }
});