"use strict"



let number = +prompt("Iki reqemli ededi daxil edin:");

while (number < 10 || number > 99) {
    number = +prompt("Duzgun iki reqemli ededi daxil edin:");
}

while (number < 1000) {
    document.write(number);
    number += 7;
}
document.write("Son deyer:", number);
