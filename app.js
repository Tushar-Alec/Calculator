const add = function(a, b) {
    return a + b;
}

const subtract = function(a, b) {
    return a - b;
}

const multiply = function(a, b) {
    return a * b;
}

const divide = function(a, b) {
    if (b !== 0) {
        return a / b;
      } else {
        return "Cannot divide by zero";
      }
}

let num1 = '1';
let num2 = '1';
let operator = '+';

function operate(operator, num1, num2){

    switch(operator){
        case '+':
            return add(num1, num2);
            break;
        case '-':
            return subtract(num1, num2);
            break;
        case '*':
            return multiply(num1, num2);
            break;
        case '/':
            return divide(num1, num2);
            break;
      }
    };



