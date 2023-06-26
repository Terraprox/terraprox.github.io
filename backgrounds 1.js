const ver = document.querySelector('.bg');
ver.classList.add('fade-in');

const backgroundgifs = {
    0: 'https://media.tenor.com/3aprEaHFOjMAAAAC/anime-aesthetic.gif',
    1: 'https://media.tenor.com/NG0ioOjLsVkAAAAC/anime.gif',
    2: 'https://media.tenor.com/MhsdqUU_djAAAAAC/aesthetic-wallpaper-anime.gif',
    3: 'https://media.tenor.com/Lp6NidhP1uMAAAAC/spring-fall.gif',
    4: 'https://media.tenor.com/dShj1HWV0GkAAAAC/testeee.gif',
    5: 'https://media.tenor.com/RqAmvvWT440AAAAC/anime-aesthetic.gif'
};

var random = Math.floor(Math.random() * 6);

ver.style.backgroundImage = `url('${backgroundgifs[random]}')`;

console.log("lol");