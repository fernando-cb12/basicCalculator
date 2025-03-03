document.addEventListener("DOMContentLoaded", () => {
  const screen = document.getElementById("screen");
  const buttons = document.querySelectorAll("button");
  let currentInput = "";
  let operator = "";
  let firstOperand = "";
  let secondOperand = "";

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const value = button.textContent;

      if (button.id === "clear") {
        currentInput = "";
        operator = "";
        firstOperand = "";
        secondOperand = "";
        screen.value = "0";
      } else if (button.id === "equals") {
        secondOperand = currentInput;
        screen.value = calculate(firstOperand, secondOperand, operator);
        currentInput = screen.value;
        operator = "";
      } else if (
        ["add", "subtract", "multiply", "divide", "sqrt", "square"].includes(
          button.id
        )
      ) {
        firstOperand = currentInput;
        operator = value;
        currentInput = "";
      } else {
        currentInput += value;
        screen.value = currentInput;
      }
    });
  });

  function calculate(first, second, operator) {
    const num1 = parseFloat(first);
    const num2 = parseFloat(second);
    switch (operator) {
      case "+":
        return num1 + num2;
      case "-":
        return num1 - num2;
      case "*":
        return num1 * num2;
      case "/":
        return num1 / num2;
      case "√":
        return Math.sqrt(num1);
      case "^":
        return Math.pow(num1, num2);
      default:
        return second;
    }
  }
});
