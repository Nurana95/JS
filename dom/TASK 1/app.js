"use strict"


let bir_reqem = document.getElementById("num1");
let operator = document.getElementById("operator");
let iki_reqem = document.getElementById("num2");
let btn = document.getElementById("btn");
btn.onclick = () => {
  const value1 = parseInt(bir_reqem.value)
  const valueoperator = operator.value
  const value3 = parseInt(iki_reqem.value)

  let sum
  switch (valueoperator) {
    case '+':
      sum = value1 + value3;
      break;
    case '-':
      sum = value1 - value3;
      break;
    case '*':
      sum = value1 * value3;
      break;

    default:
      sum = "+-/* operator yaz";


  }

  alert(sum)
}


