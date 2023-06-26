/*const button = document.getElementById("button");
button.innerHTML = "click me bruh";

function nextpage () { 
    console.log(50+50 + "WOW!!!");
    button.style.backgroundColor = "rgba(0, 0, 0, 1)";
    button.innerHTML = "Clicked";
    setTimeout(1000);
    button.innerHTML = "YOU CLICKED ME WOW!!!";
}

button.addEventListener("click", nextpage())*/
const ver = document.querySelector('.bg');
ver.classList.add('fade-in');

const button = document.createElement("button");
button.type = "button";
button.innerHTML = "Welcome Page";
const buttonarea = document.querySelector("#buttonarea");
buttonarea.appendChild(button);
button.addEventListener("click", alert);
function alert() {
    console.log("lol");
    button.innerHTML = "WOW!";
    window.location.href = "index.html";
}
button.addEventListener("mouseout", reset);
function reset () {
    button.innerHTML = "Welcome Page";
}

const button2 = document.createElement("Play");
button2.type = "button";
button2.textContent = "Play";

const button3 = document.createElement("Pause");
button3.type = "button";
button3.textContent = "Pause";

const playcontainer = document.querySelector("#playcontainer");
playcontainer.appendChild(button2);

const lofi1 = new Audio("Audio/meh lofi edit.mp3");

button2.addEventListener("click", play);
function play() {
    console.log("lol again");
    lofi1.play();
}

const volumecontrol = document.querySelector("#volumecontrol");
volumecontrol.addEventListener("input", function() {
    lofi1.volume = volumecontrol.value / 100;
});

button3.addEventListener("click", pause);
function pause() {
    console.log("stop!!!");
    lofi1.pause();
}

const pausecontainer = document.querySelector("#pausecontainer");
pausecontainer.appendChild(button3);