"use strict"

function faktorialHesabla(a) {
    if (a === 0 || a === 1) {
    } else {
        let faktorial = 1;
        while (a > 1) {
            faktorial *= a;
            a--;
        }
        return faktorial;
    }
}


let a = 5;
document.write(a + "!" + faktorialHesabla(a)); 