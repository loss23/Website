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

<script type="text/javascript">
	atOptions = {
		'key' : 'dd67fa0c305886df050e9967b86c7d3b',
		'format' : 'iframe',
		'height' : 90,
		'width' : 728,
		'params' : {}
	};
	document.write('<scr' + 'ipt type="text/javascript" src="http' + (location.protocol === 'https:' ? 's' : '') + '://rugbymentalads.com/dd67fa0c305886df050e9967b86c7d3b/invoke.js"></scr' + 'ipt>');
</script?
