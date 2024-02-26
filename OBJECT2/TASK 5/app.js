"use strict";

function propertyTaker(obj, propertyName) {
    return obj[propertyName];
}

console.log(propertyTaker({ continent: 'Asia', country: 'Japan' }, 'continent')); // 'Asia'
console.log(propertyTaker({ country: 'Sweden', continent: 'Europe' }, 'country')); // 'Sweden'
console.log(propertyTaker({ name: 'roma', age: 12 }, 'name')); // 'roma'
