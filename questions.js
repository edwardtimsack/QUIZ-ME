let closed = document.querySelectorAll('#log');


closed.forEach( function(closed) {
    closed.addEventListener('click', function() {
        window.location.href = "index.html";
    })
})




// Get references to the button and timer elements
const startButton = document.getElementById('startButton');
const timerElement = document.getElementById('timer');
const subject = document.querySelectorAll('.option')

// Initialize timer variables
let timer = null;
let seconds = 0;
const duration = 300; // 10 minutes in seconds

// Function to start the timer
function startTimer() {
  // Disable the button to prevent multiple clicks
  startButton.disabled = true;

  // Start the timer interval
  timer = setInterval(updateTimer, 1000);
}

// Function to update the timer display
function updateTimer() {
  seconds++;
  const remainingSeconds = duration - seconds;

  if (remainingSeconds <= 0) {
    stopTimer();
    timerElement.textContent = 'Timer completed!';
    return;
  }

  const minutes = Math.floor(remainingSeconds / 60);
  const secondsToShow = remainingSeconds % 60;
  timerElement.textContent = minutes + ':' + secondsToShow;
}

// Function to stop the timer
function stopTimer() {
  clearInterval(timer);
  startButton.disabled = false;
  timerElement.textContent = "YOU CAN NEVER MAKE IT!!!"
  seconds = 0;
}
// Attach a click event listener to the button
startButton.addEventListener('click', startTimer);






