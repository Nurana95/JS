"use strict";


let evKvadrati = +prompt("Evin kvadratini daxil edin: ");
let evQiymeti = +prompt("Evin qiymetini daxil edin: ");
let valyuta = prompt("Valyuta tipini daxil edin (AZN, USD, EUR, vb.): ");

if (evKvadrati >= 2000 && evQiymeti === 99999 && valyuta === "AZN") {
    document.write("Evi aliram.");
} else {
    document.write("Hec bir hal mene maraqli deyil. Evi almiram.");
}


