"use strict";
const displayCurrent = document.querySelector(".current");
const displayPrevious = document.querySelector(".previous");
const displayAnswer = document.querySelector(".ans");
let operator = false;
let firstTime = true;
let a = null;
let opr = "";
let b = null;

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
        if (button.className == 'btn--num') {
            if (displayCurrent.textContent == "0") {
                displayCurrent.textContent = button.textContent;
            } else {
                displayCurrent.textContent += button.textContent;
            }
            if (a && opr) {
                b = displayCurrent.textContent;
                displayAnswer.textContent = calculate(a, opr, b);
            }
            operator = true;
        } else if (button.className == "btn--opr" && operator) {
            if (firstTime) {
                a = displayCurrent.textContent;
                firstTime = false;
            } else
                a = displayAnswer.textContent;
            opr = e.key;
            displayCurrent.textContent = "0";
            operator = false;
        }
    }
})

