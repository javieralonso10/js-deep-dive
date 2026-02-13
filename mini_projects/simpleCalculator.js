const prompt = require("prompt-sync")();
let num1;
let num2;
let operator;

function calculate(num1, num2, operator) {
  if (operator === "+") {
    return num1 + num2;
  } else if (operator === "-") {
    return num1 - num2;
  } else if (operator === "*") {
    return num1 * num2;
  } else if (operator === "/") {
    if (num2 === 0) {
      return "Error: Division by zero is not allowed.";
    }
    return num1 / num2;
  } else {
    return "Error: Invalid operator.";
  }
}

num1 = parseFloat(prompt("Enter the first number: "));
operator = prompt("Enter the operator (+, -, *, /): ");
num2 = parseFloat(prompt("Enter the second number: "));

const result = calculate(num1, num2, operator);
console.log(`Result: ${result}`);