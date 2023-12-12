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

let first_num = ''
let second_num = ''
let operator = '';