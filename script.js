"use strict";
const displayCurrent = document.querySelector(".current");
const displayAnswer = document.querySelector(".ans");
const curOpr = document.querySelector(".opr");
const clearDisplay = document.querySelector(`button[data-key= "CE"]`);
const resetCalculator = document.querySelector(`button[data-key= "AC"]`);

let operator = false;
let firstTime = true;
let a = null;
let opr = "";
let b = null;
let cur = 1;


function specialOperations(sopr) {
    switch (sopr) {
        case 'Backspace':
            displayCurrent.textContent = displayCurrent.textContent.slice(0, -1);
            if (displayCurrent.textContent == "") displayCurrent.textContent = "0";
            break;
        case '=':
            if (displayCurrent.textContent == '0') {
                curOpr.textContent = "";
            } else {
                displayAnswer.textContent = calculate(a, opr, displayCurrent.textContent);
                displayCurrent.textContent = "0";
            }
    }
}

function calculate(a, opr, b) {
    a = Number(a);
    b = Number(b);
    switch (opr) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            if (b == 0)
                alert("You can't divide a number by 0 lmao");
            else
                return a / b;
        case '^':
            return a ** b;
    }

}
window.addEventListener("keydown", (e) => {
    const button = document.querySelector(`button[data-key="${e.key}"]`);
    if (button) {
        cur = 1;
        if (button.className == 'btn--num') {
            if (displayCurrent.textContent == "0") {
                displayCurrent.textContent = button.textContent;
            } else {
                displayCurrent.textContent += button.textContent;
            }

            operator = true;
        } else if (button.className == "btn--opr" && operator) {
            if (a && opr) {
                b = displayCurrent.textContent;
                displayAnswer.textContent = calculate(a, opr, b);
                curOpr.textContent = e.key;
            }
            cur = 1;
            if (firstTime) {
                a = displayCurrent.textContent;
                firstTime = false;
            } else
                a = displayAnswer.textContent;
            opr = e.key;
            displayCurrent.textContent = "0";
            operator = false;
        } else if (button.className == "btn--spopr") {
            specialOperations(e.key);
            cur *= 10;
        }
    }
})

clearDisplay.addEventListener("click", () => {
    displayCurrent.textContent = "0";
})

resetCalculator.addEventListener("click", () => {
    let operator = false;
    let firstTime = true;
    let a = null;
    let opr = "";
    let b = null;
    let cur = 1;
    displayAnswer.textContent = "0";
    displayCurrent.textContent = "0";
    curOpr.textContent = "";
})