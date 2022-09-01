var todaysDate = moment().format("dddd, MMMM Do");
$("#currentDay").text(todaysDate);

$('.container').append(`<div class="row flex-nowrap"> 
                            <div class="hour d-flex justify-content-center align-items-center col-md-1 col-sm-1 col-xs-1"></div>
                            <textarea class="col-md-10 col-sm-10 col-xs-10"></textarea>
                            <div class="saveBtn col-md-1 col-sm-1 col-xs-1 align-middle d-flex justify-content-center align-items-center"><i class="fas fa-save"></i></div></div>`);
