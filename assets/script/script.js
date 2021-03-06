
var quizBody = document.querySelector("#questions");
var displayedScores = document.querySelector(".displayedScores");
var alerts = document.querySelector("#passFail");
var timeEl = document.querySelector("#scores");
var play = document.querySelector("#play");
var scoreCard = document.querySelector("#playerScore");
var gamer = document.querySelector("#userName")
var player = document.querySelector("#player");
var score = document.querySelector("#score");
var userGuess = document.querySelector(".answers");
var gameOver = document.querySelector("#gameOver");
var playAgain = document.querySelector("#playAgain");
var questionText = document.querySelector("#question");
var btn1 = document.querySelector("#btn1");
var btn2 = document.querySelector("#btn2");
var btn3 = document.querySelector("#btn3");
var btn4 = document.querySelector("#btn4");
var gamerName = document.querySelector("#gamerName");
var gamerScore = document.querySelector("#gamerScore");

var questionIndex = 0
var playerScore = 0


var trivia = [
    {
        question: "Who is the captain of the Enterprise?",
        choices: ["Picard", "Riker", "Archer", "Barclay"],
        answer: "Picard",
    },
    {
        question: "Lt. Worf is of what race?",
        choices: ["Borg", "Vulkan", "Klingon", "Romulan"],
        answer: "Klingon",
    },
    {
        question: "The Enterprise NCC-1701D is what class of starship?",
        choices: ["Voyager", "Galaxy", "Constellation", "Intrepid"],
        answer: "Galaxy",
    },
    {
        question: "Earth is located in what quadrant?",
        choices: ["Alpha", "Beta", "Gamma", "Delta"],
        answer: "Alpha",
    },
    {
        question: "Commander Spock was played by what actor?",
        choices: ["William Shatner", "Leonard Nemoy", "Michael Dorn", "Patrick Stewart"],
        answer: "Leonard Nemoy",
    }
];

function renderHighScores() {
    var userName = localStorage.getItem("userinitials");
    var theirScore = localStorage.getItem("secondsLeft");
    if (!userName || !theirScore) {
        return;
    }
    gamerName.textContent = userInitials;
    gamerScore.textContent = secondsLeft;
}

function displayQuestions() {
    var question = trivia[questionIndex];
    questionText.textContent = question.question;
    btn1.textContent = question.choices[0];
    btn2.textContent = question.choices[1];
    btn3.textContent = question.choices[2];
    btn4.textContent = question.choices[3];
}
btn1.addEventListener("click", checkAnswer);
btn2.addEventListener("click", checkAnswer);
btn3.addEventListener("click", checkAnswer);
btn4.addEventListener("click", checkAnswer);
//
function checkAnswer(event) {
    console.log(event.target);
    var userAnswer = event.target.innerText;
    if (userAnswer === trivia[questionIndex].answer) {
        alerts.textContent = "Correct!"
    } else {
        alerts.textContent = "Wrong!";
        secondsLeft = secondsLeft - 10;
    }
    questionIndex++;

    if (questionIndex < trivia.length) {
        displayQuestions();
    }

    else {
        gameOver.textContent = "IT'S GAME OVER, MAN.";
        clearInterval(timerInterval);
        userInitials = prompt("Please Enter Your Initials.");
        gamer.textContent = userInitials;
        scoreCard.textContent = secondsLeft;
        localStorage.setItem(userInitials, secondsLeft);
        questionText.style.display = "none";
        btn1.style.display = "none";
        btn2.style.display = "none";
        btn3.style.display = "none";
        btn4.style.display = "none";
       

    } return userInitials, secondsLeft;
}

play.addEventListener("click", startGame)


playAgain.style.display = "none";

function startGame() {
    play.style.display = "none";
    displayQuestions();
    setTime();
}
var timerInterval
var userInitials

var secondsLeft = 60
function setTime() {
    timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = "Your score: " + secondsLeft;
        if (secondsLeft <= 0) {
            clearInterval(timerInterval);
            alerts.textContent = "IT'S GAME OVER, MAN!";


        }
    }, 1000);
}

function highScoreList() {

}

playAgain.addEventListener("click", startGame)

function renderLastPlayer() {
    var playerId = localStorage.getItem("userInitials");
    var thatScore = localStorage.getItem("score")

    if (!playerId || !thatScore) {
        return;
    }
}
var playerScore = [];
