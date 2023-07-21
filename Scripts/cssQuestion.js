let timerElement = document.querySelector('#timer');
let questions = document.querySelector("#para");
let form = document.querySelector("form");
let exitBtn = document.querySelector("#log");
let coursesName = document.querySelector("#text");
let scoreTiming = document.querySelector('#quest');
let tracker = document.querySelector('#track');
let last = document.querySelector('.last');
let notify = document.querySelector('.notify');
let hr = document.querySelector('hr');
let questionBox = document.querySelector('.app__question-container')

let nextBtn = document.querySelector('#next-btn');
let previousBtn = document.querySelector('#previous-btn');
let restart = document.querySelector('#restart');
let result = document.querySelector('.medium');
let resultDiv = document.querySelector('main');
let wholeDocument = document.querySelector('.wrapper');
let header = document.querySelector('header');


coursesName.textContent = "CSS QUESTIONS";


let questionTitleElement = document.querySelector(".question-title");
let optionsContainerElement = document.querySelector(
  ".question__options-container"
);

exitBtn.addEventListener('click', function(){
  window.location.href = 'index.html';
  console.log("hello")
});
optionsContainerElement.addEventListener('click', function(){
  // console.log(e.target);
  //  e.target.textContent = "Clicked!";
});


// CSS questions bank 
let Questions = [
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
tracker.textContent = `Question : ${questionCount + 1} / ${Questions.length}`

let questionDetail = Questions[questionCount];

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
  if (Questions.length > questionCount) {
    questionDetail = Questions[questionCount];
    displayQuestion();
  }

    // Disable the Next button if this is the last question
    if (questionCount === Questions.length - 1) {
      nextBtn.disabled = true;
    }
    previousBtn.disabled = false;
  
  tracker.textContent = `Question : ${questionCount + 1} / ${Questions.length}`;

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
  labelEl.insertAdjacentElement("beforeend", document.createElement("br"));


  inputEl.addEventListener("change", function() {
    if (inputEl.checked && inputEl.value === questionDetail.correctAnswer) {
      score += 10;
      scoreTiming.textContent = `Score: ${score}`;
      disableOptions();
      labelEl.style.color = 'green';
      labelEl.style.border = "2px solid green";
      labelEl.style.padding = '0.3rem';
      // console.log("Correct!");
    } else {
      labelEl.style.color = 'red';
      labelEl.style.border = "2px solid red";
      labelEl.style.padding = '0.3rem';
      disableOptions();
      // console.log("Wrong!");
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

  // Clear options
  optionsContainerElement.innerHTML = "";
  questionTitleElement.innerHTML = "";

  // Check if there is a previous question
  if (questionCount >= 0 && Questions.length > questionCount) {
    questionDetail = Questions[questionCount];
    displayQuestion();

    // Disable the Previous button if this is the first question
    if (questionCount === 0) {
      previousBtn.disabled = true;
    }

    // Enable the Next button as we have moved back to a previous question
    nextBtn.disabled = false;
  }

  tracker.textContent = `Question : ${questionCount + 1} / ${Questions.length}`;
  return;
}

function timer() {
let timerElement = document.querySelector('#timer');

  let startingMinute = 1 *  60;

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
    
          // Show the medium and hide the whole document
         result.style.display = 'flex';
          // wholeDocument.style.display = 'none';
      // window.location.href = "score.html"
      resultFnx()

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

let scoreUpdate = document.querySelector('#text');
// let restartBtn = document.querySelector('.btn button');
let score1 = document.querySelector('h1 span');
let logo = document.querySelector('.trophy');

restart.addEventListener('click' , function(){
  window.location.href = 'index.html'
});

function resultFnx() {
  let answerQuest = score / 10;
  let percent = (score);
  let totalQuest = Questions.length;
  // let restartBtn = document.createElement('button');

  let scoreMessage = `You attempted and answerd ${answerQuest} out of ${totalQuest} correctly. ${percent}%`;


  result.innerHTML = scoreMessage;
  restart.style.display = 'block'

  result.style.color = 'rgb(11, 177, 11)';
  // result.style.backgroundColor = 'rgb(195, 201, 207)';
  result.style.fontSize = '35px';
  result.style.width = '100%';
  result.style.justifyContent = 'center';
  result.style.paddingTop = '8rem';
  console.log(score, 'score :');
  
  // resultDiv.style.width = '50%';
  // resultDiv.style.height = '300px';
  // result.style.backgroundColor = 'hsl(212, 25%, 25%)';
  // resultDiv.style.justifyContent = 'center';
  // resultDiv.style.borderRadius = '10px';
  // background-color: hsl(212, 25%, 25%);

  // timerElement.style.display = 'none';
  exitBtn.style.display = 'none';
  // scoreTiming.style.display = 'none';
  tracker.style.display = 'none';
  // nextBtn.style.display = 'none';
  // previousBtn.style.display = 'none';
  last.style.display = 'none';
  notify.style.display = 'none';
  hr.style.display = 'none'
  coursesName.style.display = 'block';
  // header.style.backgroundColor = 'hsl(212, 25%, 25%)';

  questionBox.style.display = 'none';
  wholeDocument.style.height = '0px';
  result.style.display = 'flex';
}
