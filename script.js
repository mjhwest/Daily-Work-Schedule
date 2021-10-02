//task 1/ add display for the day of the week and the date. 

//setting the variable currentDate, 
var currentDate = moment().format('dddd  MMMM Do, YYYY');
$("#currentDay").html(currentDate);

// var CurrentDate = moment().time(); //dosent work look at moment website and find how to display hour
// console.log(currentDate)

// var timeNow = moment().hours();
// console.log(timeNow)

var timeNow = moment().hour(Number);
console.log(timeNow)

var timeNow = moment().hour(); // Number
console.log(timeNow)

var timeNow = moment().hours(Number);
console.log(timeNow)

var timeNow = moment().hours(); // Number
console.log(timeNow)