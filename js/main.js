const rollBtn = document.querySelector("#rollBtn");
const freezeBtn = document.querySelector("#freezeBtn");
const rollAmount = document.querySelector(".rollAmount");
const playerScoreEl = document.querySelector("#playerScore");
const roundCountEl = document.querySelector("#roundCount");
const totalScoreEl = document.querySelector("#totalScore");

rollBtn.addEventListener("click", rollDice);
freezeBtn.addEventListener("click", freezeScore);

let roundCount = 1;
let playerScore = 0;
let totalScore = 0;

roundCountEl.textContent = "Current round: " + roundCount;
playerScoreEl.textContent = "Current score: " + playerScore;
totalScoreEl.textContent = "Total score: " + totalScore;

function rollDice() {
  const randomNumber = Math.floor(Math.random() * 6) + 1;
  rollAmount.textContent = randomNumber;
  console.log(randomNumber);
  if (randomNumber === 1) {
    playerScore = 0;
    roundCount++;
  } else {
    playerScore += randomNumber;
  }
  playerScoreEl.textContent = "Current score " + playerScore;
  roundCountEl.textContent = "Current round: " + roundCount;
}

function freezeScore() {
  totalScore += playerScore;
  totalScoreEl.textContent = "Total score: " + totalScore;
  playerScore = 0;
  roundCount++;
  playerScoreEl.textContent = "Current score: " + playerScore;
  roundCountEl.textContent = "Current round: " + roundCount;
  if (totalScore >= 100) {
    alert("You won the game! " + ' Amount of rounds: ' + roundCount);
    totalScore = 0;
  }
}
