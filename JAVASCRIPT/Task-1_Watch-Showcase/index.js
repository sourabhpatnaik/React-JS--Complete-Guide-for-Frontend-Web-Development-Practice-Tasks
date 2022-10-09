// ADDING TIMER TO WATCH
function timeCount() {

    var today = new Date();

    var hour = today.getHours();
    if (hour < 10) hour = "0" + hour;

    var minute = today.getMinutes();
    if (minute < 10) minute = "0" + minute;

    var second = today.getSeconds();
    if (second < 10) second = "0" + second;

    document.getElementById('clock').innerHTML = hour + ":" + minute + ":" + second;

    setTimeout("timeCount()", 1000);
}


// DISPLAYING TIMER ON CLICK
var timeBtnClick = document.getElementById('f-btn-time')
var timer = document.getElementById('clock')

timeBtnClick.addEventListener('click', function () {
    if (timer.style.display === 'none') {
        timer.style.display = 'block';
    } else {
        timer.style.display = 'none';
    }
});


// CHANGING WATCH COLOR
var blackCol = document.getElementById('col-1')
var redCol = document.getElementById('col-2')
var blueCol = document.getElementById('col-3')
var purpleCol = document.getElementById('col-4')
var pinkCol = document.getElementById('col-5')
var watchImg = document.getElementById('watch-image')

blackCol.onclick = () => {
    watchImg.src = 'black.png'
}

redCol.onclick = () => {
    watchImg.src = 'red.png'
}

blueCol.onclick = () => {
    watchImg.src = 'blue.png'
}

purpleCol.onclick = () => {
    watchImg.src = 'purpe.png'
}

pinkCol.onclick = () => {
    watchImg.src = 'pink.png'
}

//HEART RATE ANIMATION
var hrBtnClick = document.getElementById('f-btn-hr')
var hrDisplay = document.getElementById('hr')

hrBtnClick.onclick = () => {
    if (hrDisplay.style.display === "none") {
        hrDisplay.style.display = "block"
    } else {
        hrDisplay.style.display = "none"
    }


}
