"use strict"


let number = +prompt("Bir ədəd daxil edin:");
let sum = 0;
let i = 100;

while (i < 1000) {
    if (i % number === 0) {
        sum += i;
    }
    i++;
}

document.write(`Daxil etdiyiniz ədədin bölünəni olan bütün üçrəqəmli ədədlərin cəmi: ${sum}`);
