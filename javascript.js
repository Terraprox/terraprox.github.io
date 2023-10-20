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

const menubutton = document.createElement("menubutton");
menubutton.type = "menu";
menubutton.innerHTML = '<img src="Images/Hamburger Icon.png">'
const menubuttonarea = document.querySelector("#menubuttonarea");
menubuttonarea.appendChild(menubutton);
menubutton.addEventListener();