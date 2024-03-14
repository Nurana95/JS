const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.button');
let operand1 = '';
let operand2 = '';
let operator = '';
let result = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const buttonText = button.value;

    if (!isNaN(buttonText) || buttonText === '.') {
      if (operator === '') {
        operand1 += buttonText;
        display.value = operand1;
      } else {
        operand2 += buttonText;
        display.value = operand2;
      }
    } else if (buttonText === '=') {
      if (operator === '+') {
        result = parseFloat(operand1) + parseFloat(operand2);
      } else if (operator === '-') {
        result = parseFloat(operand1) - parseFloat(operand2);
      } else if (operator === '*') {
        result = parseFloat(operand1) * parseFloat(operand2);
      } else if (operator === '/') {
        result = parseFloat(operand1) / parseFloat(operand2);
      }

      display.value = result;
      operand1 = result.toString();
      operand2 = '';
      operator = '';
    } else if (buttonText === 'C') {
      operand1 = '';
      operand2 = '';
      operator = '';
      display.value = '';
    } else {
      operator = buttonText;
    }
  });
});
