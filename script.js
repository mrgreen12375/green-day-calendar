var todaysDate = moment().format("dddd, MMMM Do");
$("#currentDay").text(todaysDate);

var message = Array(9).fill('');

function savedMessage() {
    var storedMessage = JSON.parse(localStorage.getItem("message"));
    if (storedMessage !== null) {
        message = storedMessage;
    }
}

function pushMessage(event) {
    var row = $(event.target).parent().parent();
    message[Number(row.attr('id'))] = row.children('textarea').val(); 
    localStorage.setItem("message", JSON.stringify(message));
}

savedMessage();

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

$('i').click(pushMessage);