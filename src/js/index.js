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
    if (calculator.currentDisplay == "0" && target.value == ".") {
      target.value = "0.";
    }

    if (calculator.currentDisplay == "0" && target.value == "0") {
      calculator.currentDisplay = "0";
      updateResultOnDisplay();
      return;
    }

    if (calculator.currentDisplay == "0" && target.value !== "0") {
      calculator.currentDisplay = target.value;
    } else {
      calculator.currentDisplay += target.value;
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