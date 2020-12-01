function changeWords1() {
    var x = document.getElementById("currentWords");
    if (x.innerHTML == "EXALENDAR") {
        x.innerHTML = "An RCOS Project";
    } else if (x.innerHTML == "An RCOS Project") {
        x.innerHTML = "An Open Source Project";
    } else if (x.innerHTML == "An Open Source Project") {
        x.innerHTML = "EXALENDAR";
    }
}
function changeWords2() {
    var x = document.getElementById("currentWords");
    if (x.innerHTML == "EXALENDAR") {
        x.innerHTML = "An Open Source Project";
    } else if (x.innerHTML == "An Open Source Project") {
        x.innerHTML = "An RCOS Project";
    } else if (x.innerHTML == "An RCOS Project") {
        x.innerHTML = "EXALENDAR";
    }
}