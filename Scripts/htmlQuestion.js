let startButton = document.querySelector('#startButton');
let timerElement = document.querySelector('#timer');
let questions = document.querySelector("#para");
let form = document.querySelector("form");
let nextBtn = document.querySelector("#next");
let exitBtn = document.querySelector("#log");
let coursesName = document.querySelector("#text");
let scoreTiming = document.querySelector('#quest');
let questionTitleElement = document.querySelector(".question-title");
let optionsContainerElement = document.querySelector(
  ".question__options-container"
);
coursesName.textContent = "HTML QUESTIONS";


exitBtn.addEventListener('click', function(){
  window.location.href = 'home.html';
  console.log("hello")
});

// questionTitleElement.textContent = "HEllo " +"tIM";
// closed.forEach( function(closed) {
//     closed.addEventListener('click', function() {
//         window.location.href = "home.html";
//     })
// })

// HTML Questions 
let htmlQuestions = [
  {
    question: "What is the meaning of this acronym HTML?",
    answers: ["Hyper Text", "Hyper Text Markup", "Hypees Text Marup Language", "Hyper Text Markup Language"],
    correctAnswer: "Hyper Text Markup Language"
  },
  {
    question: "How do we basicaly describe HTML?",
    answers: ["Animation", "Beauty of a page", "Skeleton of a page", "none"],
    correctAnswer: "Skeleton of a page"
  },
  {
    question: "How do you create an ordered list in HTML?",
    answers: ["<ol>", "<ul>", "<list>", "<order>"],
    correctAnswer: "<ol>"
  },
  {
    question: "Which tag is used to define a table in HTML?",
    answers: ["<table>", "<div>", "<form>", "<input>"],
    correctAnswer: "<table>"
  },
  {
    question: "Which attribute is used to specify the URL of an external JavaScript file?",
    answers: ["src", "href", "link", "script"],
    correctAnswer: "src"
  },
  {
    question: "What does HTML stand for?",
    answers: ["HyperText Markup Language", "High-Throughput Multi-Level", "HyperLink", "Hydro Texting Media Language"],
    correctAnswer: "HyperText Markup Language"
  },
  {
    question: "Which HTML element is used to define the title of a webpage?",
    answers: ["<header>", "<title>", "<h1>", "<meta>"],
    correctAnswer: "<title>"
  },
  {
    question: "Which attribute is used to specify a unique identifier for an HTML element?",
    answers: ["id", "class", "name", "src"],
    correctAnswer: "id"
  },
  {
    question: "What is the correct HTML element for inserting a line break?",
    answers: ["<br>", "<hr>", "<lb>", "<break>"],
    correctAnswer: "<br>"
  },
  {
    question: "Which HTML element is used to define an unordered list?",
    answers: ["<ul>", "<ol>", "<li>", "<dl>"],
    correctAnswer: "<ul></ul>"
  },
  
];





let score = 0;
scoreTiming.innerHTML = "Score: 0"

let userSelectedAnswer = {};

let questionCount = 0;

let questionDetail = htmlQuestions[questionCount];

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
  if (htmlQuestions.length > questionCount) {
    questionDetail = htmlQuestions[questionCount];
    displayQuestion();
  }

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
      score += 20;
      scoreTiming.textContent = `Score: ${score}`;
      
      console.log(score);
      
      console.log("Correct!");
    } else {
      labelEl.style.color = 'red';
      console.log("Wrong!");
    }
  });
  optionsContainerElement.appendChild(labelEl);
}

function previousQuestion() {
  questionCount -= 1;

  // clear options
  optionsContainerElement.innerHTML = "";
  questionTitleElement.innerHTML = "";
  if (htmlQuestions.length > questionCount) {
    questionDetail = htmlQuestions[questionCount];
    displayQuestion();
  }
  
  return;
}

function timer() {
  let startingMinute = 5 *  60;

 let timerVar = setInterval(function() {
    let minute = Math.floor(startingMinute / 60);
    let seconds = startingMinute % 60;
    timerElement.textContent = `${String(minute).padStart(2,'0')}:${String(seconds).padStart(2,'0')}`;
    if(startingMinute === 0){
      clearInterval(timerVar);
    
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


