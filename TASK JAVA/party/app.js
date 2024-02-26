"use strict"

let name = prompt("Adiniz: ");
let gender = prompt("Cinsiyyetiniz (k/q): ");
let age = +prompt("Yasiniz: ");



if (gender === "Q" || gender === "q") {


    document.write(`Salam ${name} xanim`);

    if (name !== null && name !== "") {

    } else {

        document.write("Adınızı QEYD EDİN ");
    }


    if (age >= 18) {

    }
    else {
        document.write("18 yasdan yuxari olmalisiniz giris qadaqandir")
    }



} else if (gender === "K" || gender === "k") {
    document.write(`Salam ${name} cenab`);


    if (name !== null && name !== "") {

    } else {

        document.write("Adınızı QEYD EDİN ");
    }


    if (age >= 18) {

    }
    else {
        document.write("18 yasdan yuxari olmalisiniz giris qadaqandir")
    }

}
else {
    document.write("Duzgun cinsiyyet daxil edin");

}




