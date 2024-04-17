var daysItem = document.getElementById("days");
var hoursItem = document.getElementById("hours");
var minutesItem = document.getElementById("minutes");
var secondsItem = document.getElementById("seconds");


function countDown() {
    var firstRamadan = new Date("28 Feb 2025")
    var todayDate = new Date()

    var difference = firstRamadan.getTime() - todayDate.getTime()

    // console.log(difference);

    var seconds = difference / (1000) % 60
    var minutes = difference / (1000 * 60) % 60
    var hours = difference / (1000 * 60 * 60) % 24
    var days = difference / (1000 * 60 * 60 * 24)
    var weeks = difference / (1000 * 60 * 60 * 24 * 7)
    var months = difference / (1000 * 60 * 60 * 24 * 30)

    daysItem.innerHTML = Math.round(days);
    hoursItem.innerHTML = Math.round(hours);
    minutesItem.innerHTML = Math.round(minutes);
    secondsItem.innerHTML = Math.round(seconds);

    console.log(Math.round(seconds) + " Seconds are left in ramadan");
    console.log(Math.round(minutes) + " Minutes are left in ramadan");
    console.log(Math.round(hours) + " Hours are left in ramadan");
    console.log(Math.round(days) + " Days are left in ramadan");
    console.log(Math.round(weeks) + " Weeks are left in ramadan");
    console.log(Math.round(months) + " Months are left in ramadan");
}

countDown();

setInterval(countDown, 1000)