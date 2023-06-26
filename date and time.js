function updateclock() {
    var currenttime = new Date();
    var year = currenttime.getFullYear();
    var monthnum = currenttime.getMonth();
    var date = currenttime.getDate();
    var daynum = currenttime.getDay();
    var hours = currenttime.getHours();
    var minutes = currenttime.getMinutes();
    var seconds = currenttime.getSeconds();
    var season = "";

    // padding
    hours = (hours < 10 ? "0" : "") + hours;
    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;

    // outputs the time
    var clock = document.querySelector("#clock");
    clock.innerHTML = hours + ":" + minutes + ":" + seconds;

    // determines what season it currently is (just a draft as seasons are debatable and have vaguely defined timeframes)
    if (monthnum == 2 || 3 || 4) {
        season = "Spring";
    } else if (monthnum == 5 || 6 || 7) {
        season = "Summer";
    } else if (monthnum == 8 || 9 || 10) {
        season = "Autumn";
    } else if (monthnum == 11 || 0 || 1) {
        season = "Winter";
    }

    // gives a name to each monthnum
    var monthnames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    month = monthnames[monthnum];

    // gives a name to each daynum
    var daynames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    day = daynames[daynum];

    // outputs the season and the year together for simplicity
    var yearseasonmonth = document.querySelector("#year");
    yearseasonmonth.innerHTML = season + " | " + year;

    // outputs the day of the week the month and the date
    var monthdateday = document.querySelector("#month");
    monthdateday.innerHTML = day + " | " + month + " " + date;
}
updateclock();
setInterval (updateclock, 1000);