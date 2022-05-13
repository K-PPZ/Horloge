let heures = 23;
let minutes = 59;
let secondes = 59;


document.getElementById("heures").innerText = heures;
document.getElementById("minutes").innerText = minutes;
document.getElementById("secondes").innerText = secondes;


function starthorloge() {
    let decompte = setTimeout("starthorloge()", 1000);
    secondes -= 1;
    document.getElementById("secondes").innerText = secondes;
    
    if (secondes == 0) {
        minutes -= 1;
        document.getElementById("minutes").innerText = minutes;
        secondes = 59;
    }

    if (minutes == 0) {
        heures -= 1;
        document.getElementById("heures").innerText = heures;
        minutes = 59;
    }

    if (heures == 0) {
        restart();
    }
}


function restart() {
    heures = 23;
    minutes = 59;
    secondes = 59;

    document.getElementById("heures").innerText = heures;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("secondes").innerText = secondes;
}