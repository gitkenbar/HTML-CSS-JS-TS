const startButton = document.querySelector('[data-action="start"')
const stopButton = document.querySelector('[data-action="stop"')
const resetButton = document.querySelector('[data-action="reset"')
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");
let timerTime = 0;
let interval


    

function startTimer() {
    interval = setInterval(incrementTimer,1000)
};

function stopTimer() {

};

function resetTimer() {

};

function incrementTimer() {
    timerTime++;

    const numOfMinutes = Math.floor(timerTime / 60);
    const numOfSeconds = timerTime % 60;

    minutes.innerText = pad(numOfMinutes);
    seconds.innerText = pad(numOfSeconds);
};

function pad(number) {
    return (number < 10) ? '0' + number : number;
    
}
startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);