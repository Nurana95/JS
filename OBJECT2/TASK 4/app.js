"use strict"
function num(a, b, ...rest) {
  this.a = a,
    this.b = b,
    this.rest = rest // qalan arqumenti ozune hamisini goturur
}
const num1 = new num(2, 3, 4, 5, 6, 7)
console.log(num1.rest)
//a=2, b=3 ,  rest= 4 5 6 7 


//rest -qalan qaliqi goturur, ancaq parament function icinde istifade olunur 
//spread ise copy edir,  paramenti diwinda istifade olunur s
const obj1 = {
  x: 1,
  y: 2
};

const obj2 = {
  ...obj1,

  z: 3
}; // 
console.log(obj2)


