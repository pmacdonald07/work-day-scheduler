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

taskArray = [];

bodyEl = $("body");

let formArray = [$("#rowNine"), $("#rowTen"), $("#rowEleven"), $("#rowTwelve"), $("#rowOne"), $("#rowTwo"), $("#rowThree"), $("rowFour"), $("#rowFive")]

function auditTime() {
    $("div.form-group").each(function(){
    //debugger;
        var timeTest = $(this).children(".timeRow").text();
        var inputClass = $(this).children(".timeSlot");
        var inputForm = $(this).find("input");
        var currentTime = moment().format("hA");
        currentTime = moment(currentTime, "hA");
        timeTest = moment(timeTest, "hA");

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

function taskSubmit (event) {
    event.preventDefault();
    var inputVal = $(this).find("input").val();
    console.log(inputVal);
    console.log(event.target);
    
    var task = {
        timeID: $(this).find("label").attr("id"),
        taskInfo: inputVal
    };

    console.log(task);
    taskArray.push(task);
    console.log(taskArray);

    saveTasks();
}

function saveTasks () {
    localStorage.setItem("tasks", JSON.stringify(taskArray));
}

function loadTasks () {
    tasksLocal = localStorage.getItem("tasks");
    tasksLocal = JSON.parse(tasksLocal);
    taskArray = tasksLocal;

    if (taskArray === null) {
        taskArray = [];
    }

    for (i = 0; i < tasksLocal.length; i++) {
        $("label").each(function() {
            if (tasksLocal[i].timeID === $(this).attr("id")) {
                console.log($(this).parent(".form-group"));
                $(this).parent(".form-group").find("input").val(tasksLocal[i].taskInfo);
                console.log(tasksLocal[i].taskInfo);
            }
        })
    }
}

$(".formRow").on("submit", taskSubmit);

auditTime();
loadTasks();
