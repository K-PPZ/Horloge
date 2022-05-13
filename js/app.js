let min = 24;
let sec = 59;


const BarreHaut = [0, 2, 3, 5, 6, 7, 8, 9];
const BarreBas = [0, 2, 3, 5, 6, 8, 9];
const BarreGaucheHaut = [0, 4, 5, 6, 8, 9];
const BarreDroiteHaut = [0, 1, 2, 3, 4, 7, 8, 9];
const BarreGaucheBas = [0, 2, 6, 8];
const BarreDroiteBas = [0, 1, 3, 4, 5, 6, 7, 8, 9];
const BarreCentre = [2, 3, 4, 5, 6, 8, 9];

let MinutesHaut = document.getElementById("MinutesHaut");
let MinutesBas = document.getElementById("MinutesBas");

let SecondesHaut = document.getElementById("SecondesHaut");
let SecondesBas = document.getElementById("SecondesBas");

if (BarreHaut) {
    MinutesHaut.style.borderTopRed;
}
if (BarreBas) {
    MinutesBas.style.borderBottomRed;
}
if (BarreGaucheHaut) {
    MinutesHaut.style.borderTopLeftRed;
}
if (BarreDroiteHaut) {
    MinutesHaut.style.borderTopRightRed;
}
if (BarreGaucheBas) {
    MinutesBas.style.borderBottomLeftRed;
}
if (BarreDroiteBas) {
    MinutesBas.style.borderBottomRightRed;
}
if (BarreCentre) {
    MinutesBas.style.borderTopRed;
    MinutesHaut.style.borderBottomRed;
}


if (BarreHaut) {
    SecondesHaut.style.borderTopRed;
}
if (BarreBas) {
    SecondesBas.style.borderBottomRed;
}
if (BarreGaucheHaut) {
    SecondesHaut.style.borderTopLeftRed;
}
if (BarreDroiteHaut) {
    SecondesHaut.style.borderTopRightRed;
}
if (BarreGaucheBas) {
    SecondesBas.style.borderBottomLeftRed;
}
if (BarreDroiteBas) {
    SecondesBas.style.borderBottomRightRed;
}
if (BarreCentre) {
    SecondesBas.style.borderTopRed;
    SecondesHaut.style.borderBottomRed;
}


function start() {
    let decompte = setInterval("start()", 1000);
    sec --;

    if (sec == 0) {
        min --;
        sec = 59;
    }

    if (min == 0) {
        clearInterval(decompte);
    }
}
console.log(start());