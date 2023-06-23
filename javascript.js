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
const button = document.createElement("button");
button.type = "button";
button.innerHTML = "Music";
const buttonarea = document.querySelector("#buttonarea");
buttonarea.appendChild(button);
button.addEventListener("click", alert);
function alert() {
    console.log("lol");
    button.innerHTML = "WOW!";
    window.location.href = "Music.html";
}
button.addEventListener("mouseout", reset);
function reset () {
    button.innerHTML = "Music";
}