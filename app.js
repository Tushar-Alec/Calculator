let num1 = "";
let num2 = "";
let operator = "";

const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const multiply = function (a, b) {
  return a * b;
};

const divide = function (a, b) {
  if (b !== 0) {
    return a / b;
  } else {
    return "Cannot divide by zero";
  }
};

function operate(operator, a, b) {
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
    default:
      return "Invalid operator";
  }
}

function appendToDisplay(num) {
  if (operator === "") {
    if (!num1.includes(".") || num !== ".") {
      num1 += num;
      updateDisplay(num1);
    }
  } else {
    if (!num2.includes(".") || num !== ".") {
      num2 += num;
      updateDisplay(num2);
    }
  }
}

function clearDisplay() {
  document.getElementById("display").value = "";
  num1 = "";
  num2 = "";
  operator = "";
  updateDisplay('');
}

function DeleteLastDigit() {
  let display = document.getElementById("display");
  display.value = display.value.slice(0, -1);
}

function setOperator(selectedOperator) {
  if (num1 !== "") {
    if (num2 !== "") {
      calculate();
    }
    operator = selectedOperator;
  }
}

function calculate() {
  if (num1 !== "" && num2 !== "" && operator !== "") {
    let result = operate(
      operator,
      parseFloat(num1),
      parseFloat(num2)
    ).toString();
    num1 = result;
    num2 = "";
    operator = "";
    updateDisplay(result);
  }
}

function updateDisplay(value) {
  document.getElementById("display").value = value;
}

