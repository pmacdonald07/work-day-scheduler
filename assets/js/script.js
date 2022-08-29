$("#currentDay").text(moment().format("LL"));

$("#nineAM").text(moment().hours(9).format("hA"));

$("#tenAM").text(moment().hours(10).format("hA"));

$("#elevenAM").text(moment().hours(11).format("hA"));

$("#twelvePM").text(moment().hours(12).format("hA"));

$("#onePM").text(moment().hours(13).format("hA"));

$("#twoPM").text(moment().hours(14).format("hA"));

$("#threePM").text(moment().hours(15).format("hA"));

$("#fourPM").text(moment().hours(16).format("hA"));

$("#fivePM").text(moment().hours(17).format("hA"));

hoursArray = [
    9, 10, 11, 12, 13, 14, 15, 16, 17
];

//var currentTime = moment().format("hA");

//console.log(currentTime);

/*if (currentTime > tenAMTest) {
    var parentDiv = $("#tenAM").closest(".form-group").children(".timeSlot").css("background-color", "red");
    //parentDiv.css("background-color", "red");
    
}*/

function auditTime() {
    $("div.form-group").each(function(){
    //debugger;
        var timeTest = $(this).children(".timeRow").text();
        var inputClass = $(this).children(".timeSlot");
        var inputForm = $(this).find("input");
        var currentTime = moment().format("hA");
        currentTime = moment(currentTime, "hA");
        timeTest = moment(timeTest, "hA");

        console.log(timeTest);
        //console.log(moment(timeTest, "DD.MM.YYYY HH:mm"))
        console.log(currentTime.isAfter(timeTest));
        console.log(currentTime.isBefore(timeTest));
        console.log(currentTime.isSame(timeTest));
        console.log(currentTime < timeTest);
        console.log(currentTime > timeTest);
        console.log(currentTime == timeTest);
        //console.log(currentTime.diff(timeTest, "hours"));

        //currentTime = moment(currentTime);
        //console.log(moment().isBefore(timeTest));
        //debugger;
        if (currentTime.isAfter(timeTest)) {
            inputClass.removeClass("bg-danger bg-success");
            inputClass.addClass("bg-secondary");

            inputForm.removeClass("bg-danger bg-success");
            inputForm.addClass("bg-secondary");
        }
        else if (currentTime.isSame(timeTest)) {
            inputClass.removeClass("bg-secondary bg-success");
            inputClass.addClass("bg-danger");

            inputForm.removeClass("bg-secondary bg-success");
            inputForm.addClass("bg-danger");
        }
        else if (currentTime.isBefore(timeTest)) {
            inputClass.removeClass("bg-secondary bg-danger");
            inputClass.addClass("bg-success");

            inputForm.removeClass("bg-secondary bg-danger");
            inputForm.addClass("bg-success");
        }

    })
}
auditTime();
/*var currentTimeString = currentTime.toString();
console.log(currentTimeString);
console.log(currentTime);
var timeSlice = currentTimeString.slice(0, 1);
var timeNumber = parseInt(timeSlice);
console.log(timeNumber); */
