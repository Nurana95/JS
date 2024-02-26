"use strict"



let total = 50;
let step = 1;
let reqemyaz = +prompt("reqem tap amma  0-50 arasi yaza bilirsen ");

while (reqemyaz !== total) {
    reqemyaz = +prompt("reqem tap amma  0-50 arasi yaza bilirsen ");
    step++;

}


if (step == 1) {

    document.write("1000azn")
} else if (step > 1 && step <= 5) {
    document.write("750 uddun")
} else if (step >= 6 && step <= 9) {
    document.write("250 uddun")
}
else {
    document.write("-250 azn ")
}

