var quiz
var questionOne
var questionTwo
var questionThree
var questionFour
var questionFive
var userScore
var timeleft 

var trivia = [
    {
        Question: "Who is the captain of the Enterprise?",
        answers: {
            a: "Picard", true
            b: "Riker", false,
            c: "Archer", false,
            d: "Barclay", false,
        }
    },
    {
        Question: "Lt. Worf is of what race?",
        answer: {
            a: "Borg", false,
            b: "Vulkan", false,
            c: "Klingon", true,
            d: "Romulan", false
    },
    {
        Question: "The Enterprise NCC-1701D is what class of starship?",
        answer: {
            a: "Voyager", false,
            b: "Galaxy", true,
            c: "Constellation", false,
            d: "Intrepid", true
    },
    {
        Question: "Earth is located in what quadrant?"
        answer: {
            a: "Alpha", true,
            b: "Beta", false,
            c: "Gamma", false,
            d: "Delta", false,
    },
    {
        Question: "Commander Spock was played by what actor?",
        answer: {
            a: "William Shatner", false,
            b: "Leonard Nemoy", true,
            c: "Michael Dorn", false,
            d: "Patrick Stewart", false
    }
]
console.log(trivia);

var startgame=[]

timeLeft = 10

var timeInterval = setInterval(function () {
    if (timeLeft > 1) {
      timerEl.textContent = timeLeft + ' seconds remaining';
      timeLeft--;
    } else if (timeLeft === 1) {
      timerEl.textContent = timeLeft + ' second remaining';
      timeLeft--;
    } else {
      timerEl.textContent = '';
      clearInterval(timeInterval);
      displayMessage();
    }
  }, 1000);
}