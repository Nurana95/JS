"use strict"


let clock = document.getElementById('clock');

setInterval(() => {
  let date = new Date();
  let hours = String(date.getHours()).padStart(2, '0');
  //padStar Internetde gordum istifade etdim  
  let minutes = String(date.getMinutes()).padStart(2, '0');
  let seconds = String(date.getSeconds()).padStart(2, '0');
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}, 1000);
