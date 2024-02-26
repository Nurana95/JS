"use strict"


function Calc() {
    this.a = +prompt("napiwi lyuboe cislo");
    this.b = +prompt("napiwi lyuboe cislo");

    this.plus = function () {
        return this.a + this.b
    };
 
    this.minus = function () {
        return this.a - this.b;

    };
  
    this.umnojenie = function () {
        return this.a * this.b;

    };
 
    this.delenie = function () {
        return this.a / this.b;
    };

}

let calculator = new Calc();



alert(calculator.plus());
alert(calculator.minus());
alert(calculator.delenie());
alert(calculator.umnojenie());
