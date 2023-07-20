let timerElement = document.querySelector('#timer');
let questions = document.querySelector("#para");
let form = document.querySelector("form");
let exitBtn = document.querySelector("#log");
let coursesName = document.querySelector("#text");
let scoreTiming = document.querySelector('#quest');
let tracker = document.querySelector('#track');

let nextBtn = document.querySelector('#next-btn');
let previousBtn = document.querySelector('#previous-btn');

coursesName.textContent = "JAVASCRIPT QUESTIONS";

let questionTitleElement = document.querySelector(".question-title");
let optionsContainerElement = document.querySelector(
  ".question__options-container"
);

exitBtn.addEventListener('click', function(){
  window.location.href = 'index.html';
  console.log("hello")
});
optionsContainerElement.addEventListener('click', function(){
  console.log("tim");
});


//   JavaScript Questions
let jsQuestions = [
    {
       question: "What is JavaScript primarily used for?",
       answers: ["Styling web pages", "Creating interactive elements on web pages", "Storing and retrieving data", "Executing server-side code"],
       correctAnswer: "Creating interactive elements on web pages"
    },
    {
        question: "Which keyword is used to declare a variable in JavaScript?",
        answers: ["var", "let", "const", "all of the above"],
        correctAnswer: "all of the above"
    },
    {
        question: "Which built-in method can be used to convert a string to lowercase in JavaScript?",
        answers: ["toLowerCase()", "convertToLower()", "lowerCase()", "makeLowerCase()"],
        correctAnswer: "toLowerCase()"
    },
    {
        question: "What is the correct way to add comments in JavaScript?",
        answers: ["// This is a comment", " <!-- This is a comment -->", "/* This is a comment */", "// This is a comment //"],
        correctAnswer: "// This is a comment"
    },
    {
        question: "What will be the result of the following expression: 5 + '5' ?",
        answers: ["10", "55", "5 + '5'", "'5' + 5"],
        correctAnswer: "55"
    },
    {
      question: "Which of the following is NOT a data type in JavaScript?",
      answers: ["String", "Number", "Boolean", "Array"],
      correctAnswer: "Array"
    },
    {
      question: "What does the 'this' keyword refer to in JavaScript?",
      answers: ["It refers to the current function being executed", "It refers to the global object", "It refers to the previous object in the scope chain", "It refers to the object that owns the executing code"],
      correctAnswer: "It refers to the previous object in the scope chain"
    },
    {
      question: "What does the 'NaN' value represent in JavaScript?",
      answers: ["Not a Number", "Null", "Undefined", "Infinity"],
      correctAnswer: "Not a Number"
    },
    {
      question: "What does the 'this' keyword refer to in JavaScript?",
      answers: ["It refers to the current function being executed.", " It refers to the global object.", "It refers to the object that owns the executing code.", "It refers to the previous object in the scope chain."],
      correctAnswer: "It refers to the object that owns the executing code."
    },
    {
      question: "Which built-in method can be used to convert a string to uppercase in JavaScript?",
      answers: ["toLowerCase()", "convertToLower()", "toUpperCase()", "makeLowerCase()"],
      correctAnswer: "toUpperCase()"
    }
  ]

  let score = 0;
  scoreTiming.innerHTML = "Score: 0"

let userSelectedAnswer = {};

let questionCount = 0;
tracker.textContent = `Question : ${questionCount + 1} / ${jsQuestions.length}`

let questionDetail = jsQuestions[questionCount];

function displayQuestion() {
  questionTitleElement.textContent =
    "Question " + (questionCount + 1) + ": " + questionDetail.question;

  for (let i = 0; i < questionDetail.answers.length; i++) {
    const option = questionDetail.answers[i];
    createOption(option);
  }
}

displayQuestion()


function nextQuestion() {
  // Get the selected answer for the current question
  const selectedOption = document.querySelector(
    'input[name="question-option"]:checked'
  );

  // If the user has selected an answer
  if (selectedOption) {
    const selectedAnswer = selectedOption.value;
console.log(selectedAnswer);
    // Compare the selected answer with the correct answer for the current question
    if (selectedAnswer === questionDetail.correctAnswer) {

      // Store the user-selected answer and its correctness in the userSelectedAnswer object
      userSelectedAnswer[questionCount] = {
        question: questionDetail.question,
        option: selectedAnswer,
        isCorrect: true,
      };
    } else {
      userSelectedAnswer[questionCount] = {
        question: questionDetail.question,
        option: selectedAnswer,
        isCorrect: false,
      };
    }
  }

  // Move to the next question
  questionCount += 1;

  // Clear options
  optionsContainerElement.innerHTML = "";
  questionTitleElement.innerHTML = "";
  if (jsQuestions.length > questionCount) {
    questionDetail = jsQuestions[questionCount];
    displayQuestion();
  }
  tracker.textContent = `Question : ${questionCount + 1} / ${jsQuestions.length}`;
  
  return;
}

function createOption(option) {
  const labelEl = document.createElement("label");
  const inputEl = document.createElement("input");

  labelEl.classList.add("question__options-item");
  inputEl.name = "question-option";
  inputEl.value = option;
  inputEl.type = "radio";
  labelEl.appendChild(inputEl);
  labelEl.insertAdjacentText("beforeend", option);
  labelEl.insertAdjacentElement(
    "beforeend",
    document.createElement("br")
  );

  inputEl.addEventListener("change", function() {
    if (inputEl.checked && inputEl.value === questionDetail.correctAnswer) {
      labelEl.style.color = 'green';
      score += 10;
      scoreTiming.textContent = `Score: ${score}`;
      disableOptions();
      console.log(score);
      console.log("Correct!");
    } else {
      labelEl.style.color = 'red';
      disableOptions();
      console.log("Wrong!");
    }
  });
  optionsContainerElement.appendChild(labelEl);
}
function disableOptions() {
  const options = document.querySelectorAll('input[name="question-option"]');
  for (let i = 0; i < options.length; i++) {
    options[i].disabled = true;
  }
}


function previousQuestion() {
  questionCount -= 1;

  // clear options
  optionsContainerElement.innerHTML = "";
  questionTitleElement.innerHTML = "";
  if (jsQuestions.length > questionCount) {
    questionDetail = jsQuestions[questionCount];
    displayQuestion();
  }
  tracker.textContent = `Question : ${questionCount + 1} / ${jsQuestions.length}`;
  
  return;
}

function timer() {
  let startingMinute = 2 *  60;

 let timerVar = setInterval(function() {
    let minute = Math.floor(startingMinute / 60);
    let seconds = startingMinute % 60;
    timerElement.textContent = `${String(minute).padStart(2,'0')}:${String(seconds).padStart(2,'0')}`;
    if(startingMinute === 0){
      clearInterval(timerVar);
    
    }
    if(startingMinute === 0) {
      console.log('hello');
      timerElement.innerHTML = "Game Over!!"
      clearInterval(timerVar);
      window.location.href = "score.html"
    }
    
    startingMinute --;

  }, 1000);
}
timer()

function displayScore(score) {
  // scoreTiming.textContent = score;
  console.log('helo');

}

displayScore(score);