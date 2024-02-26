"use strict"
let a = +prompt("napiwi odnoznacnoe cislo");
function cislo(a) {
    if (a <= 10) {
        return a + " mukemmel reqemdi"
    } else {
        return a + " mukemmel deyil "
    }

}

document.write(cislo(a))