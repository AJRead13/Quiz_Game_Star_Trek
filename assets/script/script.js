
var quizBody = document.querySelector("#questions")
var quiz
var questionOne
var questionTwo
var questionThree
var questionFour
var questionFive
var userScore
var timeleft 
var play = document.querySelector("#play")
var countdown = 10

console.log("Hellow");

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
            a: {name: "Picard", value: true},
            b: {name: "Riker", value: false},
            c: {name: "Archer", value: false},
            d: {name: "Barclay", value: false},
    },
    {
        question: "Lt. Worf is of what race?",
            a: {name: "Borg", value: false},
            b: {name: "Vulkan", value: false},
            c: {name:"Klingon", value: true},
            d: {name: "Romulan", value: false},
    },
    {
        question: "The Enterprise NCC-1701D is what class of starship?",
            a: {name: "Voyager", value: false},
            b: {name: "Galaxy", value: true},
            c: {name: "Constellation", value: false},
            d: {name: "Intrepid", value: true},
    },
    {
        question: "Earth is located in what quadrant?",
            a: {name: "Alpha", value: true},
            b: {name:"Beta": false},
            c: {"Gamma": false},
            d: {"Delta": false},
    },
    {
        question: "Commander Spock was played by what actor?",
            a: {"William Shatner": false},
            b: {"Leonard Nemoy": true},
            c: {"Michael Dorn": false},
            d: {"Patrick Stewart": false},
    }
];
console.log(trivia[1].c.value);



function displayQuestions () {
    var quizBody = trivia;
    quizbody.style.display("block")

}


function startGame()  {
    play.style.display = "none";
    



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
