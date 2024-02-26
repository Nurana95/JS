"use strict";



//  heftelik 
let gun = +prompt("Heftenin necenci gunundasiniz? (1-7): ");

if (gun === 1) {
    document.write("Bu gun bazar ertesidir");
}
else if (gun === 2) {
    document.write("Bu gun coxresenbesidir");
} else if (gun === 3) {
    document.write("Bu gun carxambasidir");
} else if (gun === 4) {
    document.write("Bu gun cume axshamidir");
} else if (gun === 5) {
    document.write("Bu gun cume günüdür");
} else if (gun === 6) {
    document.write("Bu gun shenbedir");
} else if (gun === 7) {
    document.write("Bu gun bazar günüdür");
} else {
    document.write("Duzgun bir gun daxil edin");
}



let day = +prompt("Heftenin necenci gunundasiniz? (1-7): ");

switch (gun) {
    case 1:
        document.write("Bu gun bazar ertesidir");
        break;
    case 2:
        document.write("Bu gun coxresenbesidir");
        break;
    case 3:
        document.write("Bu gun carxambasidir");
        break;
    case 4:
        document.write("Bu gun cume axshamidir");
        break;
    case 5:
        document.write("Bu gun cume günüdür");
        break;
    case 6:
        document.write("Bu gun shenbedir");
        break;
    case 7:
        document.write("Bu gun bazar günüdür");
        break;
    default:
        document.write("Duzgun bir gun daxil edin");
        break;
}