"use strict"
let input = document.getElementById("input")
let color = document.querySelectorAll(".color");


color.forEach(btn => {
  btn.onclick = () => {
    let valueinput = input.value
    btn.style.backgroundColor = valueinput
  }

})