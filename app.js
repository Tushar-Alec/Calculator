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
    num1 += num;
    updateDisplay(num1);
  } else {
    num2 += num;
    updateDisplay(num2);
  }
}

function handleDecimal() {
  // Check if the current number already contains a decimal point
  if (value === "." && ((operator === "" && !num1.includes(".")) || (operator !== "" && !num2.includes(".")))) {
    if (operator === "") {
      num1 += value;
    } else {
      num2 += value;
    }
    updateDisplay(value);
  } else if (value !== ".") {
    // If the value is not a decimal point, append it to the current number
    if (operator === "") {
      num1 += value;
    } else {
      num2 += value;
    }
    updateDisplay(value);
  }
}



function clearDisplay() {
  document.getElementById("display").value = "";
  num1 = "";
  num2 = "";
  operator = "";
  updateDisplay('');
}

function deleteLastDigit() {
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

