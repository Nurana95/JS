"use strict"


function isValidnumber(number) {
  return number.length === 11 && number.startsWith("+7");
}
console.log(isValidnumber("+7555666666"));
