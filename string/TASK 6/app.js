"use strict";



function removeAll(string) {
    return string.replace(/!/g, "") + '!';
}

console.log(removeAll("He!llo! !!FE-25")); 