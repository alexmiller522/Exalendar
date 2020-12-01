function changeWords1() {
    var x = document.getElementById("curr");
    if (x.innerHTML == "EXALENDAR") {
        x.innerHTML = "An RCOS Project";
    } else if (x.innerHTML == "An RCOS Project") {
        x.innerHTML = "Open Source";
    } else if (x.innerHTML == "Open Source") {
        x.innerHTML = "EXALENDAR";
    }
}
function changeWords2() {
    var x = document.getElementById("curr");
    if (x.innerHTML == "EXALENDAR") {
        x.innerHTML = "Open Source";
    } else if (x.innerHTML == "Open Source") {
        x.innerHTML = "An RCOS Project";
    } else if (x.innerHTML == "An RCOS Project") {
        x.innerHTML = "EXALENDAR";
    }
}