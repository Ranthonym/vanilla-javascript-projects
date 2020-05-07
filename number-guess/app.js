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
    // game over - won
    gameOver(true, `${winningNum} is correct. You won!`);
  } else {
    // lose condition when wrong number is entered
    guessesLeft -= 1;
    if (guessesLeft === 0) {
      // game over = lost

      gameOver(false, `Game Over! The correct answer was ${winningNum}`);
    } else {
      // game continues - answer wrong
      guessInput.style.borderColor = "red";
      // clear input
      guessInput.value = "";
      // tell user it's the wrong guess
      setMessage(
        `${guess} is not correct, you have ${guessesLeft} guesses left`,
        "red"
      );
    }
  }
});

// game over UI changes
const gameOver = (won, msg) => {
  let color;
  won === true ? (color = "green") : (color = "red");
  // disable input
  guessInput.disabled = true;
  // change border color
  guessInput.style.borderColor = color;
  // set win message
  setMessage(msg, color);
};

// set message
const setMessage = (msg, color) => {
  message.style.color = color;
  message.textContent = msg;
};
