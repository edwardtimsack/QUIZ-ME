let startButton = document.querySelector('#startButton');
let timerElement = document.querySelector('#timer');
let questions = document.querySelector("#para");
let form = document.querySelector("form");
let nextBtn = document.querySelector("#next");
let exitBtn = document.querySelector("#exit");
let coursesName = document.querySelector("#text");

coursesName.textContent = "CSS QUESTIONS";


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

let score = 0;
let userSelectedAnswer = {};
let questionCount = 0;

let questionDetail = cssQuestions[questionCount];

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
  if (questions.length > questionCount) {
    questionDetail = questions[questionCount];
    displayQuestion();
  }
  
  return;
}