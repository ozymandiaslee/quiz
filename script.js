var timeEl = document.getElementById('time');
var questionEl = document.getElementById('question');
var answerEl = document.getElementById('answers');
var resultEl = document.getElementById('result');
var buttondivEl = document.getElementById('buttondiv');

var timeLeft;
var interval;

function startTime() {
    interval = setInterval(function() {
        timeEl.textContent = totalTime;
        timeLeft = totalTime--;
        if (totalTime === 0) {
            timeEl.textContent = "GAME OVER";
            clearInterval(interval);
        }
    }, 1000)
}

function init() {
    questionEl.textContent = "Answer these questions within the time limit. Your final score will be based on speed and accuracy. Good luck!";
    totalTime = 15 * questions.length;
    timeLeft = 0;
    var startBtn = document.createElement("button");
    startBtn.textContent = "Begin";
    startBtn.setAttribute("class", "btn btn-success");
    startBtn.addEventListener("click", function(event) {
        event.preventDefault();
        startBtn.setAttribute("class", "d-none");
        startTime();
    })
    buttondivEl.append(startBtn);
}

init();