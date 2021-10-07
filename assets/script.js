//setting the variable currentDate, 
var currentDate = moment().format('dddd  MMMM Do, YYYY');
$("#currentDay").html(currentDate);


//Create function for timeslots to be colored based on '.past / .present / .future. '
function hourColor() {
    //create a variable for the time of the day using moment.hours to give you current time. 
    //note; hours logs in 24 hour time so needed to adjust id's in html to represent 24hour time too. 
    let timeDay = moment().hours();

    //Use $('.time-block').each(function()  as shorthand to refer to each timeblock  in HTMl
    $('.time-block').each(function() {

        // $(this) enables the use of jquery methods. 
        //create varaible to identify which time block is allocated to which color. parseInt returns number value, attr returns value of 'id'.
        let hourNow = parseInt($(this).attr('id'));
        //create if statement to identify color code // Using moment method with isBefore method, can check that timeDay is BEFORE hourNow
        if (moment(timeDay).isBefore(hourNow)) {
            // .find method returns all 'textarea' elements,  addClass method adds one or more class to selected element. 'future' turns green
            $(this).find('textarea').addClass('future');
        } else if (moment(timeDay).isAfter(hourNow)) {
            $(this).find('textarea').addClass('past');
        } else {
            $(this).find('textarea').addClass('present');
        }
    });
};

//create variable for saveButton
var saveButton = $('.saveBtn');
//create a function to save user input in allocated time slot. //  '.on' in jquery instead of addEventListner. 
saveButton.on('click', function() {
    //siblings searches (hourBock, hourTask and saveBtn) and returns .hourBlock  //.text method sets or returns the text content of selected element; eg 10am
    var timeSlot = $(this).siblings(".hourBlock").text();
    // .val method (normally used with input, select or textarea) returns or sets the value attributre of selected elements. //In this instance it is SETTING, i.e what the userinputs into textarea class. 
    var textAct = $(this).siblings(".hourTask").val();
    //set items in localStorage
    localStorage.setItem(timeSlot, textAct)
});

//create function to retrieve from local storage. 
function dailyPlanner() {
    //for each hourBlock, the function will apply 
    $('.hourBlock').each(function() {
        //hourNow uses text method to return all content for each hourBlock element that has had saveButton function enabled.
        var hourNow = $(this).text();
        // planHour gets hourNow id from timeBlock function 
        var planHour = localStorage.getItem(hourNow);
        console.log(hourNow) //
        if (hourNow !== null) {
            $(this).siblings(".hourTask").val(planHour);
        }
        console.log(planHour)
    })
}

// //Call the functions.
hourColor();
dailyPlanner();