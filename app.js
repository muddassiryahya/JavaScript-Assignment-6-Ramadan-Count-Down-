var firstRamadan = new Date("11 March 2024")
var todayDate = new Date()

var difference = firstRamadan.getTime() - todayDate.getTime()


var seconds = difference / (1000)
var minutes = difference / (1000 * 60)
var hours = difference / (1000 * 60 * 60)
var days = difference / (1000 * 60 * 60 * 24)
var weeks = difference / (1000 * 60 * 60 * 24 * 7)
var months = difference / (1000 * 60 * 60 * 24 * 30)



console.log(Math.round(seconds) + " Seconds are left in ramadan")
console.log(Math.round(minutes) + " Minutes are left in ramadan")
console.log(Math.round(hours) + " Hours are left in ramadan")
console.log(Math.round(days) + " Days are left in ramadan")
console.log(Math.round(weeks) + " Weeks are left in ramadan")
console.log(Math.round(months) + " Months are left in ramadan")
