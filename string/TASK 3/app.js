"use strict";




let fullName = prompt("ad soyad yaz ");


let parts = fullName.split(" ");

if (parts.length === 2) {

    let reversedName = parts[1] + " " + parts[0];

    document.write("Фамилия и имя после замены: " + reversedName);
} else {
    document.write("Пожалуйста, введите имя и фамилию через пробел.");
}
