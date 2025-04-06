"use strict";

//generate random secret number between 1 to 20
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20; // set initial score to 20
let highestScore = 0; // set initial highest score to 0
let wrongAttemptCount = 0; //set initial wrong attempt to 0

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  //if no guess
  if (!guess) {
    document.querySelector(".message").textContent = "⛔ No Number";
  }
  if (guess <= 0 || guess > 20) {
    document.querySelector(".message").textContent = "⛔ Guess between 1-20";
  }
  //if guess is higher than the actual secret number
  else if (guess > secretNumber) {
    score--;
    wrongAttemptCount++;
    document.querySelector(".message").textContent = "📈 Too High ";
    document.querySelector(".score").textContent = score;
    if (wrongAttemptCount >= 2) {
      let minNumber = secretNumber - 3 < 1 ? 1 : secretNumber - 3;
      let maxNumber = secretNumber + 3 > 20 ? 20 : secretNumber + 3;
      document.querySelector(
        ".hint"
      ).textContent = `🤔 Hint : Try in range ${minNumber} and ${maxNumber}`;
    }
  }

  // if the guess is lower than the actual secret number
  else if (guess < secretNumber) {
    score--;
    wrongAttemptCount++;
    document.querySelector(".message").textContent = "📉 Too Low";
    document.querySelector(".score").textContent = score;
    if (wrongAttemptCount >= 2) {
      let minNumber = secretNumber - 3 < 1 ? 1 : secretNumber - 3;
      let maxNumber = secretNumber + 3 > 20 ? 20 : secretNumber + 3;
      document.querySelector(
        ".hint"
      ).textContent = `🤔 Hint : Try in range ${minNumber} and ${maxNumber}`;
    }
  }

  //if the guess is corret
  else if (guess === secretNumber) {
    document.querySelector(".check").disabled = true;
    document.querySelector(".message").textContent = "🎉 Correct Number !";
    document.querySelector(".number").textContent = secretNumber;
    if (highestScore <= score) {
      highestScore = score;
    }
    document.querySelector(".highscore").textContent = highestScore;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".footer").style.color = "#000";
    document.querySelector(".hint").style.color = "#000";
  }

  if (score === 0) {
    document.querySelector(".message").textContent = "☹️ YOU LOST THE GAME !";
    document.querySelector(".check").setAttribute("disabled", "");
  }
});

//this function resets values to initial game value, when you click on Again! button
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  highestScore = highestScore;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";
  document.querySelector(".highscore").textContent = highestScore;
  document.querySelector(".number").textContent = "?";
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".check").disabled = false;
  wrongAttemptCount = 0;
  document.querySelector(".hint").textContent =
    "Hint: Wait for 2 wrong attempts 😉";
  document.querySelector("footer").style.color = "#ccc";
  document.querySelector(".hint").style.color = "peachpuff";
});
