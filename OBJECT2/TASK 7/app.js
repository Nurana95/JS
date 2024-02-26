"use strict"

function existsAndTruthy(obj, propertyName) {

    return Boolean(obj[propertyName]);
}


console.log(existsAndTruthy({ a: 1, b: 2, c: 3 }, 'b'));
console.log(existsAndTruthy({ x: 'a', y: null, z: 'c' }, 'y'));
console.log(existsAndTruthy({ x: 'a', b: 'b', z: undefined }, 'z')); 
