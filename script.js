//task 1/ add display for the day of the week and the date. 

var currentDate = moment().format('dddd, MMMM Do, YYYY');
$("#currentDay").html(currentDate);