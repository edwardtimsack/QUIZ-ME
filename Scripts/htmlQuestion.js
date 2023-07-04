let startButton = document.querySelector('#startButton');
let timerElement = document.querySelector('#timer');
let questions = document.querySelector("#para");
let form = document.querySelector("form");
let nextBtn = document.querySelector("#next");
let exitBtn = document.querySelector("#exit");
let coursesName = document.querySelector("#text");

coursesName.textContent = "HTML QUESTIONS";

let questionTitleElement = document.querySelector(".question-title");
let optionsContainerElement = document.querySelector(
  ".question__options-container"
);

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
    answers: ["<ol>", "<ul>, <list>, <order>"],
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
  }
];

let score = 0;
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
  if (gitQuestions.length > questionCount) {
    questionDetail = gitQuestions[questionCount];
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
      // score += 1;
      console.log("Correct!");
    } else {
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