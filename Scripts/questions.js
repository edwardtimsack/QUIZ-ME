let startButton = document.querySelector('#startButton');
let timerElement = document.querySelector('#timer');
let questions = document.querySelector("#para");
let form = document.querySelector("form");
let nextBtn = document.querySelector("#next");
let exitBtn = document.querySelector("#exit");


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

// CSS questions bank 
let cssQuestions = [
  {
    question: "What is the CSS property used to set the text overflow?",
    answers: ["text-overflow","overflow", "text-wrap","text-decoration"],
    correctAnswer: "text-overflow"
  },
  {
    question: "What is the Css property used to set border width?",
    answers: ["border-width" ,"width", "border", "border-size"],
    correctAnswer: "width"
  },
  {
    question: "Which Css property is used to set background-image?",
    answers: ["image", "background-image", "background", "background-picture"],
    correctAnswer: "background-image"
  },
  {
    question: "Which Css property is used to set the opacity of an element?",
    answers: ["opacity", "transpency", "translucent", "none"],
    correctAnswer: "opacity"
  },
  {
    question: "Which property is used to set the font-family of an element in css?",
    answers: ["font", "font-size", "text-front", "font-family"],
    correctAnswer: "font-family"
  }
]

// HTML Questions 
// let htmlQuestions = [
//   {
//     question: "What is the meaning of this acronym HTML?",
//     answers: ["Hyper Text", "Hyper Text Markup", "Hypees Text Marup Language", "Hyper Text Markup Language"],
//     correctAnswer: "Hyper Text Markup Language"
//   },
//   {
//     question: "How do we basicaly describe HTML?",
//     answers: ["Animation", "Beauty of a page", "Skeleton of a page", "none"],
//     correctAnswer: "Skeleton of a page"
//   },
//   {
//     question: "How do you create an ordered list in HTML?",
//     answers: ["<ol>", "<ul>, <list>, <order>"],
//     correctAnswer: "<ol>"
//   },
//   {
//     question: "Which tag is used to define a table in HTML?",
//     answers: ["<table>", "<div>", "<form>", "<input>"],
//     correctAnswer: "<table>"
//   },
//   {
//     question: "Which attribute is used to specify the URL of an external JavaScript file?",
//     answers: ["src", "href", "link", "script"],
//     correctAnswer: "src"
//   }
// ];

let questionCount = 0;

// let questionDetail = cssQuestions[questionCount];

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
  questionCount += 1;

  // clear options
  optionsContainerElement.innerHTML = "";
  questionTitleElement.innerHTML = "";
  if (questions.length > questionCount) {
    questionDetail = questions[questionCount];
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

  inputEl.addEventListener('click' , function(event){
    userSelectedAnswer[questionCount] = {
      question: questionDetail.text,
      option
    } 
  })
  optionsContainerElement.appendChild(labelEl);
}

function nextQuestion() {
  questionCount += 1;

  // clear options
  optionsContainerElement.innerHTML = "";
  questionTitleElement.innerHTML = "";
  if (questions.length > questionCount) {
    questionDetail = questions[questionCount];
    displayQuestion();
  }
  
  return;
}

 //   previousQuestion function 
 function previousQuestion() {
  questionCount -= 1;

  // clear options
  optionsContainerElement.innerHTML = "";
  questionTitleElement.innerHTML = "";
  if (questions.length > questionCount) {
    questionDetail = questions[questionCount];
    displayQuestion();
  }
  
  return;
}