"use strict";

let a = +prompt("please napiwi cislo");
function cislo(a) {

    if (a > 0) {
        document.write(a + " + uyqundur.");
    } else if (a < 0) {
        document.write(a + " - uyqundur  ");
    } else {
        document.write("cislo=0.");
    }
}

cislo(a);
