"use strict"




let ulduzsayi = 4;


while (ulduzsayi > 0) {
    let stars = '';
    for (let i = 0; i < ulduzsayi; i++) {
        stars += '*';
    }
    document.write(stars + "<br/>");
    ulduzsayi--;
}

