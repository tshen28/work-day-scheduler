//TODO: Display current day at top of calendar
var currentDayEl = document.querySelector("#currentDay");
console.log(currentDayEl) 
currentDayEl.textContent = moment().format("dddd, MMMM Do");
//TODO: timeblocks with standard hours
//TODO: timeblocks color-coded to times of day
    //gray: past, red: current, green: future
var inputBox = document.querySelector("#row");
var timerEl = document.querySelector(".timer");
var timeRn = moment();
console.log(timeRn);



//TODO: onclick: can enter event in timeblock
    //save button for event: localStorage store
var saveBtnEl = document.querySelector(".saveBtn")
saveBtnEl.addEventListener("click", function(event) {
    event.preventDefault();
    var inputRow = document.getElementById("row").value;
    console.log(inputRow);
    localStorage.setItem("input", inputRow);
    var saveInput = localStorage.getItem(inputRow);
    inputBox.innerHTML = saveInput;
});
//TODO: refresh page- event is still there
