// setup the current date below the title.
var todaysDate = moment().format("dddd, MMMM Do");
$("#currentDay").text(todaysDate);
// created variable for where the message will go in each text area.
var message = Array(9).fill('');
//created function for previous stored messages.
function savedMessage() {
    var storedMessage = JSON.parse(localStorage.getItem("message"));
    if (storedMessage !== null) {
        message = storedMessage;
    }
}
//created function to save message. 
//used event.target and traversed the dom to the text area. 
function pushMessage(event) {
    var row = $(event.target).parent().parent();
    message[Number(row.attr('id'))] = row.children('textarea').val(); 
    localStorage.setItem("message", JSON.stringify(message));
}
// logs saved message.
savedMessage();
//created a for loop for the sections.
//setting the time for each hour.
//setting the color of the message field based of the time of day.
//create the time, text, and save icon for every hour.
for (var i = 0; i <= 8; i++) {

    var hour = moment(i + 9, 'h').format("ha");

    if (moment(moment().format("ha"), 'ha').isAfter(moment(hour, 'ha'))) {
        color = "past";
    } else if (moment(moment().format("ha"), 'ha').isSame(moment(hour, 'ha'))) {
        color = "present";
    } else {
        color = "future";
    }

    $('.container').append(`<div class="row flex-nowrap" id= "${i}"> 
                                <div class="hour d-flex justify-content-center align-items-center col-md-1 col-sm-1 col-xs-1">
                                    ${hour}
                                </div>
                                <textarea class="col-md-10 ${color} col-sm-10 col-xs-10">${message[i]}</textarea>
                                <div class="saveBtn col-md-1 col-sm-1 col-xs-1 align-middle d-flex justify-content-center align-items-center">
                                    <i class="fas fa-save"></i>
                                </div>
                            </div>`);
}
// created listener to have the floppy disk icon save message.
$('i').click(pushMessage);