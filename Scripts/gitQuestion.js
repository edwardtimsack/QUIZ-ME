let startButton = document.querySelector('#startButton');
let timerElement = document.querySelector('#timer');
let questions = document.querySelector("#para");
let form = document.querySelector("form");
let nextBtn = document.querySelector("#next");
let exitBtn = document.querySelector("#exit");
let coursesName = document.querySelector("#text");

coursesName.textContent = "GIT QUESTIONS";


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

//   gitQuestions
let gitQuestions = [
    {
        question: "What is Git?",
        answers: ["A version control system", "A programming language", "A web browser", " A database management system"],
        correctAnswer: "A version control system"
    },
    {
        question: "What command is used to create a new branch in Git?",
        answers: ["git push", " git checkout", "git branch", " git merge"],
        correctAnswer: "git branch"
    },
    {
        question: "How do you undo the last commit in Git?",
        answers: ["git push --force", "git commit --amend", " git reset", "git revert"],
        correctAnswer: "git commit --amend"
    },
    {
        question: "What is the purpose of the 'git clone' command?",
        answers: ["To create a new repository", "To merge two branches", "To push changes to a remote repository", "To create a local copy of a repository"],
        correctAnswer: "To create a local copy of a repository"
    },
    {
        question: "How do you discard all local changes in Git and revert to the last committed state?",
        answers: ["git push", "git reset --hard", "git checkout", "git stash"],
        correctAnswer: " git reset --hard"
    }
]
let score = 0;
let userSelectedAnswer = {};

let questionCount = 0;

let questionDetail = gitQuestions[questionCount];

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
  labelEl.insertAdjacentElement("beforeend", document.createElement("br"));


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
  if (gitQuestions.length > questionCount) {
    questionDetail = gitQuestions[questionCount];
    displayQuestion();
  }
  
  return;
}
