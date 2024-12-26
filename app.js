const timerEle = document.getElementById("timer");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");

let startTime = 0;
let elapsedTime = 0;
let timerInterval; 

function startTimer(){
    startTime = Date.now()-elapsedTime;
    timerInterval = setInterval(()=>{
        elapsedTime = Date.now() - startTime;
        timerEle.innerText = formatTime(elapsedTime);
    },10);

    startBtn.disabled = true;
    stopBtn.disabled = false;
}

function formatTime(elapsedTime){
    const milliSec = Math.floor((elapsedTime % 1000)/10);
    const sec = Math.floor((elapsedTime % (1000*60))/1000);
    const min = Math.floor((elapsedTime % (1000*60*60))/(1000*60));
    const hour = Math.floor((elapsedTime / (1000*60*60)));

    return  (hour > 9 ? hour : "0"+hour)
            + ":" +
            (min > 9 ? min : "0"+min)
            + ":" +
            (sec > 9 ? sec : "0"+sec)
            + ":" +
            (milliSec > 9 ? milliSec : "0"+milliSec)
}

function stopTimer(){
    clearInterval(timerInterval); // to clear value in function startTimer
    startBtn.disabled = false;
    stopBtn.disabled = true;
}

function resetTimer(){
    clearInterval(timerInterval); // to clear value in function startTimer

    elapsedTime = 0;
    timerEle.innerText = "00:00:00:00";
    
    startBtn.disabled = false;
    stopBtn.disabled = true;
}

startBtn.addEventListener("click",startTimer);
stopBtn.addEventListener("click",stopTimer);
resetBtn.addEventListener("click",resetTimer);