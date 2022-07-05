// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function () {


    let takeOff = this.document.getElementById('takeoff');
    let status = this.document.getElementById("flightStatus");
    let shuttleBackground = document.getElementById("shuttleBackground");
    let shuttleHeight = document.getElementById("spaceShuttleHeight");
    let imgObj = document.getElementById('rocket');
    imgObj.style.position = 'absolute';
    imgObj.style.left = '0px';
    imgObj.style.bottom = '0px';



    let up = this.document.getElementById('up');
    up.addEventListener('click', function () {
        if (shuttleHeight.innerHTML != "250000") {
            movement = parseInt(imgObj.style.bottom) + 10 + 'px';
            imgObj.style.bottom = movement;
            shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML) + 10000;
        }
    });

    let down = this.document.getElementById('down');
    down.addEventListener('click', function () {
        if (shuttleHeight.innerHTML != "0") {
            movement = parseInt(imgObj.style.bottom) - 10 + 'px';
            imgObj.style.bottom = movement;
            shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML) - 10000;
        }
    });

    let left = this.document.getElementById('left');
    left.addEventListener('click', function () {
        if (shuttleHeight.innerHTML != "-200000") {
            movement = parseInt(imgObj.style.left) - 10 + 'px';
            imgObj.style.left = movement;
            shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML) - 10000;
        }
    });

    let right = this.document.getElementById('right');
    right.addEventListener('click', function () {
        if (shuttleHeight.innerHTML != "510000") {
            movement = parseInt(imgObj.style.left) + 10 + 'px';
            imgObj.style.left = movement;
            shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML) + 10000;
        }
    });




    // Put your code for the exercises here.
    takeOff.addEventListener("click", function () {
        result = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if (result) {
            shuttleBackground.style.background = 'blue';

            shuttleHeight.innerHTML = '10000';
            status.innerHTML = "Shuttle in flight";
        }
    });


    let land = this.document.getElementById('landing');
    land.addEventListener('click', function () {
        result = window.confirm('The shuttle is landing. Landing gear engaged.');
        status.innerHTML = "The shuttle has landed.";
        shuttleBackground.style.background = 'green';
        shuttleHeight.innerHTML = '0';

    });

    let abortMission = this.document.getElementById('missionAbort');
    abortMission.addEventListener('click', function () {
        result = window.confirm('Confirm that you want to abort the mission.');
        if (result) {
            status.innerHTML = "Mission aborted.";
            shuttleBackground.style.background = 'green';
            shuttleHeight.innerHTML = '0';
        }
    });




})