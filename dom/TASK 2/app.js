"use strict"

let color = document.querySelectorAll(".color");
color.forEach(btn => {
  btn.onclick=()=>{
    document.body.style.background=btn.id
  }
})


