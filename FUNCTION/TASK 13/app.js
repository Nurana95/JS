"use strict";

let a = +prompt("Birinci eded ");
let b = +prompt("İkinci eded ");
function enboyuk(a, b) {
    let c = a < b ? a : b;
    let d;
    for (let i = 1; i <= c; i++) {
        if (a % i === 0 && b % i === 0) {
            d = i;
        }

    }
    return d
}
let result = enboyuk(a, b);
document.write("en boyuk eded " + result);