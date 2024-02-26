"use strict"

function Car(marka, model, year, engine) {
    this.marka = marka,
        this.model = model,
        this.year = year,
        this.engine = engine
}
let car1 = new Car("Toyota", "Corolla", 2020, "1.6L");
let car2 = new Car("Honda", "Civic", 2018, "1.8L");
let car3 = new Car("Ford", "Mustang", 2022, "2.3L");


console.log(car1);
console.log(car2);
console.log(car3);