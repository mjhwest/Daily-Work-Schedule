# <Daily Planner Scheduler>

## Description
We were provided with a template of an un-finished daily work schedule. The daily shedule needed to have a number of elememtns present to successfully fullfil the acceptance critiera. Such as; having the current day displayed at the top of the calander, having timeblocks that fit a 9-5 working day schedule, having color coded timeblocks that represent a specific time of the day, being able to enter text into desired timeblocks, the ability to save the entered text into local storage and lastly to have the entries remain on the page when it is refreshed.

This task was important as it allowed me to further develop and implenet Javascript core principles while also including newly attained skills attributed to third-party API's, such as Jquery, Jquery widgets, bootstrap as well as a few others. This was an important task as a future web-developer as it introduced to me an array of new ideas and resoucres which will be beneifical as i continue to develop and learn more web-development skills. 

There were a number of problems that needed to be solved in order to sucessfully complete this task. One of the challenges i had was wrapping my head around the idea and fundementals of bootstap - layout. It look me a little while to understand its principles. This was fairly frustating as it seemend to be very striahgt-forward, however, was not clicking with me. After doing some research online and going over the activities from the week i realised its not too difficult and there are a few main principles to follow. Container, Row, Element. You need a container to hold / fit everything in place, inside each container you need to have a row, inside a row are the elements. 
    Another problem i had to solve was the use of JQuery. After just wrapping my head around Javascrip it was difficult to understand JQuery. However, after some time i understood how JQuery worked and can see it benefical use in web developement. What i ended up liking about it is that it saves time and actually makes more sense than Javascript.

To implement the color-coding of certain timeblocks i used the 'momnent' Third-Party-API, specifically isBefore and isAfter. While i understood how to use this i couldnt get it to work. After some time i solved the problem. 

While the task was difficult at times i did enjoy completing it. I learnt how to use many Third-Party API's as well as further develop my understanding of local storage. 

Here is a link to the deployed applicatoin: 

https://mjhwest.github.io/Daily-Work-Schedule/


## Usage

The usage of this application is relatively straight forward. 

The user is presented with timeslots for a 9-5 working day. 

![day](assets/screenshots/day.png)

Each time block was created in html using the principle 
Container, Row, Element. 

![CTE](assets/screenshots/CTE.png)

The user is then able to type text into the desired time slot. If a time slot is grey it is past, if it is red it is current, and if green it is in the futre. 

![timeslots](assets/screenshots/timeslots.png)

The time slots were created using isBefore method from moment.js 
It allowed for time slots to compare if they are before or after the current time of the day. 

![moment](assets/screenshots/moment.png)

The user can then click on the save button, which would store the text into local storage. This was done by creating a save button function which would set elements into local storage. If the user then refreshed the page the same activity would still be there, this was done using a similar function but this time focused on getting the information out of local storage. 

The last step was to call the functions so they would enable. 

![local](assets/screenshots/local.png)

## Features
There are a number of features that were used to complete this project. <br>
<br>
-Bootstrap Layout <br>
<br>
-Google Fonts <br>
<br>
-Font Awesome <br>
<br>
-Moment.js <br>
<br>
-JQuery <br>

## License
  
MIT License

Copyright (c) 2021 Michael West

