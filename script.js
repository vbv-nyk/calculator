"use strict";

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
            return a / b;
    }

}

function operator() {
    let a = prompt("Enter number 1");
    let b = prompt("Enter number 2");
    let opr = prompt("Enter an operator");
    console.log(calculate(a, opr, b));
}

operator();

