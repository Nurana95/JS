"use strict";

let clock = document.querySelector('.clock');
let colors = document.querySelectorAll(".color");

const color = ["red", "blue", "green", "yellow"];
const randomIndex = Math.floor(Math.random() * color.length);
const randomColor = color[randomIndex];

let timer = 11;
let interval;

colors.forEach(btn => {
  btn.addEventListener('click', () => {
    if (btn.id === randomColor) {
      clearInterval(interval);
      document.body.style.backgroundColor = btn.id;
      clock.innerHTML = `0:0:${timer < 10 ? '0' : ''}${timer}`; 
      }
  });
});

interval = setInterval(() => {
  if (timer > 0) {
    timer--;
    clock.innerHTML = `0:0:${timer < 10 ? '0' : ''}${timer}`; 
    }
}, 1000);
