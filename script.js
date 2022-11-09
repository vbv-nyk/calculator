"use strict";
const displayCurrent = document.querySelector(".current");
const displayPrevious = document.querySelector(".previous");
const displayAnswer = document.querySelector(".ans");
let operator = false;
let firstTime = true;
let a = null;
let opr = "";
let b = null;


function specialOperations(opr) {
    switch (opr) {
        case 'Backspace':
            displayCurrent.textContent = displayCurrent.textContent.slice(0, -1);
            if (displayCurrent.textContent == "") displayCurrent.textContent = "0";
            break;
    }
}
function calculate(a, opr, b) {
    a = Number(a);
    b = Number(b) || 0;
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
let cur = 1;
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

