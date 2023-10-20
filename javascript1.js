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

lofi1 = new Audio("Audio/meh lofi edit.mp3");

button2.addEventListener("click", play);
function play() {
    console.log("lol again");
    lofi1.play();
}

var volumecontrol = document.querySelector("#volumecontrol input[value='50']");
volumecontrol.addEventListener("input", function() {
    var volumecontrolvolume = parseFloat(volumecontrol.value) / 100;
    lofi1.volume = volumecontrolvolume;
});

button3.addEventListener("click", pause);
function pause() {
    console.log("stop!!!");
    lofi1.pause();
}

const pausecontainer = document.querySelector("#pausecontainer");
pausecontainer.appendChild(button3);

const musicplayer = document.getElementById("musicplayer");


var songs = [
    {title: "Lo-Fi 1", artist: "Terraprox", src: "Audio/meh lofi edit.mp3"},    //1
    {title: "...", artist: "...", src: "..."},                                  //2
    //
]

const songlist = document.getElementById("songlist");

songlist.innerHTML = ""; // clears the existing listitems

function player(index) {
    const song = songs[index];
    audioplayer.src = song.src;
    audioplayer.play();
}

songs.forEach((song, index) => {
    let listitem = document.createElement("li");
    listitem.textContent = '${song.title} | ${song.artist}';

    listitem.addEventListener("click", () => {
        player(index); // play/pause
    });

    songlist.appendChild(listitem);
})

const audioplayer = document.getElementById("audioplayer");