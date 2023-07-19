let startButton = document.querySelector('#startButton');
let timerElement = document.querySelector('#timer');
let questions = document.querySelector("#para");
let form = document.querySelector("form");
let nextBtn = document.querySelector("#next");
let exitBtn = document.querySelector("#log");
let coursesName = document.querySelector("#text");
let scoreTiming = document.querySelector('#quest');

coursesName.textContent = "CSS QUESTIONS";


let questionTitleElement = document.querySelector(".question-title");
let optionsContainerElement = document.querySelector(
  ".question__options-container"
);

exitBtn.addEventListener('click', function(){
  window.location.href = 'index.html';
  console.log("hello")
})
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
  },
  {
    question: "Which CSS property is used to control the spacing between the content and the border of an element?",
    answers: ["margin", "padding", "border-spacing", "line-height"],
    correctAnswer: "padding"
  },
  {
    question: "Which CSS selector targets an element based on its class attribute?",
    answers: ["#", ".", "*", ">"],
    correctAnswer: "."
  },
  {
    question: "Which CSS property is used to change the background color of an element?",
    answers: ["color", "background-color", "text-color", "fill-color"],
    correctAnswer: "background-color"
  },
  {
    question: "Which CSS property is used to control the appearance of text in an element?",
    answers: ["font-style", "text-decoration", "text-align", "text-transform"],
    correctAnswer: "text-decoration"
  },
  {
    question: "Which CSS property is used to specify the amount of space between the lines of text in an element?",
    answers: ["line-height", "word-spacing", "letter-spacing", "text-spacing"],
    correctAnswer: "line-height"
  }
]

let score = 0;
scoreTiming.innerHTML = "Score: 0"

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
  if (cssQuestions.length > questionCount) {
    questionDetail = cssQuestions[questionCount];
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
      labelEl.style.color = 'green';
      score += 10;
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
  if (cssQuestions.length > questionCount) {
    questionDetail = questions[questionCount];
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
