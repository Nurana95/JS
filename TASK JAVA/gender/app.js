"use strict"


let gender = prompt("Cinsiyyetinizi daxil edin (k/q): ");
let ad = prompt("ADINIZ QEYD EDIN ")

if (gender === "k" || gender === "K") {
    document.write("SALAM" + ad);
} else if (gender === "q" || gender === "Q") {
    document.write("SALAM", ad);
} else {
    document.write("Duzgun bir cinsiyyet daxil edin");
}


gender = prompt("Cinsiyyetinizi daxil edin (kisi/qadin): ");
ad = prompt("ADINIZ QEYD EDIN ")

switch (gender) {
    case "k":
        document.write("salam" + ad);
        break;
    case "q":
        document.write("Salam" + ad);
        break;
    case "K":
        document.write("Salam" + ad);
        break;
    case "Q":
        document.write("Salam" + ad);
        break;

    default:
        document.write("Duzgun bir cinsiyyet daxil edin");
        break;
}



