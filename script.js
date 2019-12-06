var timeEl = document.getElementById('time');
var questionEl = document.getElementById('question');
var answerEl = document.getElementById('answers');
var resultEl = document.getElementById('result');
var buttondivEl = document.getElementById('buttondiv');

var timeLeft;
var interval;
var questionIndex;
var totalTime;

function startTime() {
    interval = setInterval(function() {
        timeEl.textContent = timeLeft;
        timeLeft = totalTime--;
        if (timeLeft <= 0) {
            timeEl.textContent = "GAME OVER";
            clearInterval(interval);
        }
    }, 1000)
}

function init() {
    questionEl.textContent = "Answer these questions within the time limit. Your final score will be based on speed and accuracy. Good luck!";
    totalTime = 15 * questions.length;
    timeLeft = 0;
    questionIndex = 0;
    var startBtn = document.createElement("button");
    startBtn.textContent = "Begin";
    startBtn.setAttribute("class", "btn btn-success");
    startBtn.addEventListener("click", function(event) {
        event.preventDefault();
        startBtn.setAttribute("class", "d-none");
        startTime();
        displayQuestion();
    })
    buttondivEl.append(startBtn);
}

function displayQuestion() {
    questionEl.textContent = questions[questionIndex].title;
    for (var i = 0; i < questions[questionIndex].choices.length; i++) {
        var choiceEl = document.createElement("button");
        choiceEl.setAttribute("value", questions[questionIndex].choices[i]);
        choiceEl.textContent = questions[questionIndex].choices[i];
        choiceEl.addEventListener("click", function() {
         if (this.getAttribute("value") === questions[questionIndex].answer) {
             resultEl.textContent = "Correct";
             questionIndex++;
             displayQuestion();
         }
         else {
             resultEl.textContent = "Incorrect";
             totalTime = totalTime - 15;
             questionIndex++;
             displayQuestion();
         }
        })
        answerEl.append(choiceEl);
    }
}

init();