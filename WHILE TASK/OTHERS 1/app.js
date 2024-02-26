"use strict"

let napravlenie = prompt("napravlenie (up, right, down, left):");

switch (napravlenie) {
    case "up":
        document.write("up");
        break;
    case "right":
        document.write("right");
        break;
    case "down":
        document.write("down");
        break;
    case "left":
        document.write("left");
        break;
    default:
        document.write("sehv");
}

