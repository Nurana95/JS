"use strict"


let n = +prompt("Bir ədəd daxil edin:");

while (n >= 0) {
    if (n % 2 !== 0) {
        document.write(n + "<br/>");
    }
    n--;
}

