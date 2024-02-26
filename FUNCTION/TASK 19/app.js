"use strict";

let number = +prompt("zehmet olmasa 3 reqem yaz")
function lucky(number) {


    let ucuncu = number % 10;
    let ikinci = Math.floor(number / 10) % 10;
    let birinci = Math.floor(number / 100);
    let bir_uc = birinci + ikinci + ucuncu;
    return bir_uc
}


document.write(lucky(number));

