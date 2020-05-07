// game values
let min = 1,
  max = 10,
  winningNum = 2,
  guessesLeft = 3;

// ui elements
const game = document.querySelector("#game"),
  minNum = document.querySelector(".min-num"),
  maxNum = document.querySelector(".max-num"),
  guessBtn = document.querySelector("#guess-btn"),
  guessInput = document.querySelector("#guess-input"),
  message = document.querySelector(".message");

// assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// listen for guess
guessBtn.addEventListener("click", () => {
  let guess = parseInt(guessInput.value);

  // validate
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Enter a number between ${min} and ${max}`, "red");
  }

  // check if correct guess
  if (guess === winningNum) {
    // disable input
    guessInput.disabled = true;
    // change border color
    guessInput.style.borderColor = "green";
    // set win message
    setMessage(`${winningNum} is correct!, you win!`, "green");
  } else {
  }
});

// set message
const setMessage = (msg, color) => {
  message.style.color = color;
  message.textContent = msg;
};
