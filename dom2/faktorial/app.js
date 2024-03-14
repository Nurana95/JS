"use strict";

let btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  let input = document.getElementById("input").value;
  let result = 1;

  if (input < 0) {
    alert("error")
    return;
  }

  for (let i = 2; i <= input; i++) {
    result *= i;
  }

  console.log(`Faktor ${result}`);
});
