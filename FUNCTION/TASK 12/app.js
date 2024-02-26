"use strict"

let ay = prompt("Zehmet olmasa ay yaz ");
function neceGun(ay) {
    let gun;
    switch (ay) {
        case "yanvar":
        case "mart":
        case "may":
        case "iyun":
        case "avqust":
        case "oktyabr":
        case "dekabr":
            gun = 31;
            break;
        case "fevral":
            gun = 29;
            break;
        case "aprel":
        case "iyul":
        case "sentyabr":
        case "noyabr":
            gun = 30;
            break;
        default:
            gun = " Duzgun ay yaz ";
    }

    return gun;
}


document.write(ay + neceGun(ay));
