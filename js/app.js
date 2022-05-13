let min = 24;
let sec = 59;

let MinutesHaut = document.getElementById("MinutesHaut");
let MinutesBas = document.getElementById("MinutesBas");

let SecondesHaut = document.getElementById("SecondesHaut");
let SecondesBas = document.getElementById("SecondesBas");



function starthorloge() {
    let decompte = setTimeout("starthorloge()", 1000);
    sec -= 1;
    
    if (sec == 0) {
        min -= 1;
        sec = 59;
    }

    if (min == 0) {
        min = 59;
        restart();
    }
}
console.log(starthorloge);

function restart() {
    min = 24;
    sec = 59;
}