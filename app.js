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

function operate(operator, num1, num2) {
  switch (operator) {
    case "+":
      return add(num1, num2);
    case "-":
      return subtract(num1, num2);
    case "*":
      return multiply(num1, num2);
    case "/":
      return divide(num1, num2);
    default:
      return "Invalid operator";
  }
}

// Function to update the display when a number button is clicked
function appendToDisplay(num) {
  if (operator === "") {
    num1 += num;
    updateDisplay(num1);
  } else {
    num2 += num;
    updateDisplay(num2);
  }
}

// Handle multiple decimal points
function handleDecimal(value) {
  if (!num1.includes(".") && !num2.includes(".")) {
    if (operator === "") {
      num1 += value;
    } else {
      num2 += value;
    }
    updateDisplay(value);
  }
}

// Function to clear the display and reset variables
function clearDisplay() {
  document.getElementById("display").value = "";
  num1 = "";
  num2 = "";
  operator = "";
  updateDisplay('');
}

// Function to delete the last digit from the display
function DeleteLastDigit() {
  document.getElementById("display");
  display.value = display.value.slice(0, -1);
}


// Function to update the operator
function setOperator(selectedOperator) {
  if (num1 !== "") {
    operator = selectedOperator;
    
  }
}

// Function to perform the calculation when the "=" key is pressed
function calculate() {
  if (num1 !== "" && num2 !== "" && operator !== "") {
    let result = operate(
      operator,
      parseFloat(num1),
      parseFloat(num2)
    ).toString();
    console.log("Result:", result);
    document.getElementById("display").value = result;
  }
}

function updateDisplay(value) {
  document.getElementById("display").value = value;
}
