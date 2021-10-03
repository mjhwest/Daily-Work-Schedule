//task 1/ add display for the day of the week and the date. 

//setting the variable currentDate, 
var currentDate = moment().format('dddd  MMMM Do, YYYY');
$("#currentDay").html(currentDate);


//task 2 
//variable to determine the time now. Note; it registers in 24 hour time. 
var presentTime = moment().hour(); // Number
console.log(presentTime)


//Create function for timeslots to be colored based on '.past / .present / .future. '
function hourColor() {

    //create a variable for the time of the day using moment.hours to give you current time. 
    //note; hours logs in 24 hour time so needed to adjust id's in html to represent 24hour time too. 
    let timeDay = moment().hours();

    //Use $('.time-block').each(function()  as shorthand to refer to each timeblock  in HTMl
    $('.time-block').each(function() {

        //create varaible to identify which time block is allocated which color, we use parseInt as it return a number value
        let hourNow = parseInt($(this).attr('id'));

        //create if statement to identify color code 
        // Using moment method with isBefore, can check that timeDay is BEFORE hourNow
        if (moment(timeDay).isBefore(hourNow)) {
            //if it is before, use .find to search HTML for textarea and add class future to it.
            $(this).find('textarea').addClass('future');
            //same principle as above, but this time if timeDay is AFTER hourNow, we search for textarea and add class past
        } else if (moment(timeDay).isAfter(hourNow)) {
            $(this).find('textarea').addClass('past');
            //same principles as above, but if its the previous twom then its this. Search for textarea and add class present. 
        } else {
            $(this).find('textarea').addClass('present');
        }

    });
};

//create variable for save button ;

var saveButton = $('.saveBtn');

//create function so when saveBtn is clicked on its saved to local Storage (use, setItem). 

saveButton.on('click', function() {


})


//Call the hourColor function to enable color coding. 
hourColor();