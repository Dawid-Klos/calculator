import "../scss/main.scss";

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

const calculator = {
    result: '0',
    firstNumber: null,
    secondNumber: null,
    operation: null,
};


function updateResultDisplay(event) {
    const display = document.querySelector(".result__number--js");
    display.innerHTML = calculator.result;
};

updateResultDisplay();

const buttons = document.querySelector(".buttons--js");

buttons.addEventListener("click", (event) => {
    const { target } = event;

    if (!target.matches('button')) {
        return;
    }

    if (target.classList.contains('digit')) {
        console.log('digit' , target.value);
        return;
    }

    if (target.classList.contains('operation')) {
        console.log('operation' , target.value);
        return;
    }

    if (target.classList.contains('clear')) {
        console.log('clear' , target.value);
        return;
    }

    if (target.classList.contains('reset')) {
        console.log('reset' , target.value);
        return;
    }
});