"use strict";


function calc(a, znak, b) {
    let result;
    switch (znak) {
        case '*':
            result = a * b;
            break;

        case '/':
            result = a / b;
            break;

        case '+':
            result = a + b;
            break;

        case '-':
            result = a - b;
            break;
        default:
            result = "viberi znacok /*-+"

    }
    return result;
}
document.write(calc(5, "*", 8))
