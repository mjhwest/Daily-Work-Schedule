//task 1/ add display for the day of the week and the date. 

//setting the variable currentDate, 
var currentDate = moment().format('dddd  MMMM Do, YYYY');
$("#currentDay").html(currentDate);



//variable to determine the time now. Note; it registers in 24 hour time. 
var presentTime = moment().hour(); // Number
console.log(presentTime)


//Create function for timeslots to be colored based on '.past / .present / .future. 

function hourColor() {
    var timeDay = moment().hour();
    console.log(timeDay )

    $(".time-block").each(function(){
        var hourNow = parseInt($(this).attr("id"));{
        if (timeDay.isBefore.hourNow) {
            addClass(".past");
        } else (timeDay.isSame.hourNow) 
            addClass(".prsent");
        } if (timeDay.isAfter.hourNow) {
             addClass(".future");
        }
    });
};


//CALL THE FUNCTION

hourColor();