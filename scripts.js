window.addEventListener("load", function () {
        
const takeoffButton = document.getElementById("takeoff");
const flightStatus = document.getElementById("flightStatus");
const shuttleBackground = document.getElementById("shuttleBackground");
const spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
const landButton = document.getElementById("landing");
const missionAbortButton = document.getElementById("missionAbort");
const upButton = document.getElementById("up");
const downButton = document.getElementById("down");
const leftButton = document.getElementById("left");
const rightButton = document.getElementById("right");
const spaceShuttle = document.getElementById("rocket");

takeoffButton.addEventListener("click", event => {
let userInput = this.window.confirm("Confirm that the shuttle is ready for takeoff.")

if (userInput) {
flightStatus.innerHTML = "Shuttle in Flight";
shuttleBackground.style.backgroundColor = "blue";
spaceShuttleHeight.innerHTML = "10,000";
}
});

landButton.addEventListener("click", event => {
window.alert("The shuttle is landing. Landing gear engaged.");
flightStatus.innerHTML = "The shuttle has landed.";
shuttleBackground.style.backgroundColor = 'green';
spaceShuttleHeight.innerHTML = '0';
});


missionAbortButton.addEventListener("click", event => {
let userInput = this.window.confirm("Confirm that you want to abort the mission.");

if (userInput) {
flightStatus.innerHTML = 'Mission aborted.';
shuttleBackground.style.backgroundColor = 'green';
spaceShuttleHeight.innerHTML = '0';
}
});

// upButton.addEventListener("click", event => {
// spaceShuttle.style.top = -10px;
// spaceShuttleHeight.innerHTML =+ 10,000;


// });
});
