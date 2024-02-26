"use strict";

let number = +prompt("zehmet olmasa 6 reqem yaz")
function lucky(number) {
    let altinci = number % 10;
    let besinci = Math.floor(number / 10) % 10;
    let dorduncu = Math.floor(number / 100) % 10;
    let ucuncu = Math.floor(number / 1000) % 10;
    let ikinci = Math.floor(number / 10000) % 10;
    let birinci = Math.floor(number / 100000);
    let bir_uc = birinci + ikinci + ucuncu;
    let dord_alti = dorduncu + besinci + altinci;
    let a = bir_uc === dord_alti ? "udmusunuz" : "uduzmusunuz";
    return a
}


document.write(lucky(number));

