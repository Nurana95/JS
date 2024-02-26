"use strict"



let ay = +prompt("Ilin necenci ayindasiniz? (1-12): ");

if (ay === 1) {
    document.write("Bu ay yanvar ayidir");
} else if (ay === 2) {
    document.write("Bu ay fevral ayidir");
} else if (ay === 3) {
    document.write("Bu ay mart ayidir");
} else if (ay === 4) {
    document.write("Bu ay aprel ayidir");
} else if (ay === 5) {
    document.write("Bu ay may ayidir");
} else if (ay === 6) {
    document.write("Bu ay iyun ayidir");
} else if (ay === 7) {
    document.write("Bu ay iyul ayidir");
} else if (ay === 8) {
    document.write("Bu ay avqust ayidir");
} else if (ay === 9) {
    document.write("Bu ay sentyabr ayidir");
} else if (ay === 10) {
    document.write("Bu ay oktyabr ayidir");
} else if (ay === 11) {
    document.write("Bu ay noyabr ayidir");
} else if (ay === 12) {
    document.write("Bu ay dekabr ayidir");
} else {
    document.write("Duzgun bir ay daxil edin");
}


let month = +prompt("Ilin necenci ayindasiniz? (1-12): ");

switch (ay) {
    case 1:
        document.write("Bu ay yanvar ayidir");
        break;
    case 2:
        document.write("Bu ay fevral ayidir");
        break;
    case 3:
        document.write("Bu ay mart ayidir");
        break;
    case 4:
        document.write("Bu ay aprel ayidir");
        break;
    case 5:
        document.write("Bu ay may ayidir");
        break;
    case 6:
        document.write("Bu ay iyun ayidir");
        break;
    case 7:
        document.write("Bu ay iyul ayidir");
        break;
    case 8:
        document.write("Bu ay avqust ayidir");
        break;
    case 9:
        document.write("Bu ay sentyabr ayidir");
        break;
    case 10:
        document.write("Bu ay oktyabr ayidir");
        break;
    case 11:
        document.write("Bu ay noyabr ayidir");
        break;
    case 12:
        document.write("Bu ay dekabr ayidir");
        break;
    default:
        document.write("Duzgun bir ay daxil edin");
        break;
}