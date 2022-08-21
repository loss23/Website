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
    t.style.backgroundColor = "Green";
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
    location.href = "https://discord.gg/V6n4xYRHvf";
}

function Tetris() {
    location.href = "Tetris.html";
}
