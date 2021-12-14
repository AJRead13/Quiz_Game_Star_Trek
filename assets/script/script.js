
var quizBody = document.querySelector("#questions")
var quiz
var alerts = document.querySelector("#passFail");
var userScore
var timeleft 
var play = document.querySelector("#play")
var countdown = 60
var userGuess = document.querySelector(".answers")

var question = document.querySelector("#question");
var btn1 = document.querySelector("#btn1");
var btn2 = document.querySelector("#btn2");
var btn3 = document.querySelector("#btn3");
var btn4 = document.querySelector("#btn4");

var questionIndex = 0
var playerScore = 0

// .style.display ="none";
// .dataset.state = "hidden";
// .style.display = "block";


// function startGame(){
//     play.addEventListener("click", 
//     )
// }




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
console.log(trivia[1].question);

function displayQuestions () {
    var question = trivia[questionIndex];
    question.innerhtml = question.question;
    btn1.textContent = question.choices[0];
    btn2.textContent = question.choices[1];
    btn3.textContent = question.choices[2];
    btn4.textContent = question.choices[3];
    //quizbody.style.display = "block";


}
btn1.addEventListener("click", checkAnswer);
btn2.addEventListener("click", checkAnswer);
btn3.addEventListener("click", checkAnswer);
btn4.addEventListener("click", checkAnswer);

function checkAnswer(event)  {
    console.log(event.target);
    var userAnswer = event.target.innerText;
    if (userAnswer === trivia[questionIndex].answer){
        alerts.textContent = "Correct!"
        playerScore++
    }else {
        alerts.textContent = "Wrong!";
        countdown-5;

    }
    questionIndex++;
    
    if (questionIndex < trivia.length) {
        displayQuestions();

    }else {
        alerts.textContent = "IT'S GAME OVER, MAN."
    }
}
play.addEventListener("click", startGame)



function startGame()  {
    play.style.display = "none";

   displayQuestions()

    



}


function setTime() {
    var countdown = setInterval(function() {
      secondsLeft--;
      gameTime.textContent = secondsLeft;
      if(secondsLeft === 0) {
        clearInterval(countdown);
        sendMessage("Game-Over");
      }
    }, 1000);
  }


// var timeInterval = setInterval(function () {
//     if (timeLeft > 1) {
//       timerEl.textContent = timeLeft + ' seconds remaining';
//       timeLeft--;
//     } else if (timeLeft === 1) {
//       timerEl.textContent = timeLeft + ' second remaining';
//       timeLeft--;
//     } else {
//       timerEl.textContent = '';
//       clearInterval(timeInterval);
//       displayMessage();
//     }
//   }, 1000);
// }
