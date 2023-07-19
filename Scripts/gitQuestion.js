let startButton = document.querySelector('#startButton');
let timerElement = document.querySelector('#timer');
let questions = document.querySelector("#para");
let form = document.querySelector("form");
let nextBtn = document.querySelector("#next");
let exitBtn = document.querySelector("#log");
let coursesName = document.querySelector("#text");
let scoreTiming = document.querySelector('#quest');
let tracker = document.querySelector('#track');


coursesName.textContent = "GIT QUESTIONS";


let questionTitleElement = document.querySelector(".question-title");
let optionsContainerElement = document.querySelector(
  ".question__options-container"
);

exitBtn.addEventListener('click', function(){
  window.location.href = 'index.html';
  console.log("hello")
})



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
    },
    {
      question: "What does the command 'git push' do?",
      answers: ["Downloads changes from a remote repository", "Commits changes to the local repository", "Merges two branches", "Uploads changes to a remote repository"],
      correctAnswer: "Uploads changes to a remote repository"
    },
    {
      question: "What is the purpose of the command 'git pull'?",
      answers: ["Pushes local changes to a remote repository", "Fetches and merges changes from a remote repository to the current branch", "Creates a new branch", "Discards all local changes and reverts to the last committed state"],
      correctAnswer: "Fetches and merges changes from a remote repository to the current branch"
    },
    {
      question: "Which command is used to view the commit history in Git?",
      answers: ["git log", "git status", "git branch", "git diff"],
      correctAnswer: "git log"
    },
    {
      question: "What does the command 'git merge' do?",
      answers: ["Uploads changes to a remote repository", "Creates a new branch", "Discards all local changes and reverts to the last committed state", "Combines changes from a different branch into the current branch"],
      correctAnswer: "Combines changes from a different branch into the current branch"
    },
    {
      question: "How do you discard uncommitted changes in a specific file in Git?",
      answers: ["git commit", "git reset", "git checkout", "git revert"],
      correctAnswer: "git checkout"
    }
]
let score = 0;
scoreTiming.innerHTML = "Score: 0"

let userSelectedAnswer = {};

let questionCount = 0;
tracker.textContent = `Question : ${questionCount + 1} / ${gitQuestions.length}`

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
  tracker.textContent = `Question : ${questionCount + 1} / ${gitQuestions.length}`;

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
  if (gitQuestions.length > questionCount) {
    questionDetail = gitQuestions[questionCount];
    displayQuestion();
  }
  tracker.textContent = `Question : ${questionCount + 1} / ${gitQuestions.length}`;
  
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
