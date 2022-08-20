var count = 0;

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}

function hov1(t) {
    t.style.backgroundColor = "LightGreen";
}

function unhov1(t) {
    t.style.backgroundColor = "#4CAF50";
}

function cool(t) {
    if (count >= 100) {
        count = 0
        alert("You reached 100!");
    }
    count++;
    t.innerHTML = "Clicked me " + count + " times!";
}

function Scripts() {
    location.href = "Scripts.html";
}

function Tetris() {
    location.href = "Tetris.html";
}
