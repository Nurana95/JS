"use strict"


let weight = +prompt("Kilonu YAZ");
let height = +prompt("Boyunu YAZ ");

let bmi = weight / (height * height);


if (bmi < 18.5) {
    document.write("BMI değeri azdır, ariqdir.");
} else if (bmi < 25) {
    document.write("BMI değeri normal beden ölçüsüne sahiptir.");
} else if (bmi < 30) {
    document.write("BMI değeri kilolu.");
} else {
    document.write("BMI değeri obezdir.");
}
