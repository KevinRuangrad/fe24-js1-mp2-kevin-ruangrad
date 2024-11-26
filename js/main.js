const form = document.getElementById("form");
const playerNameInput = document.getElementById("playerName");
const game = document.querySelector(".game");
const submitBtn = document.getElementById("submitBtn");
const rollBtn = document.getElementById("rollBtn");
const freezeBtn = document.getElementById("freezeBtn");
const playerScoreEl = document.getElementById("playerScore");
const roundCountEl = document.getElementById("roundCount");
const totalScoreEl = document.getElementById("totalScore");
const playerDisplay = document.getElementById("playerDisplay");
const rollAmount = document.querySelector(".rollAmount");

submitBtn.addEventListener("click", startGame);
rollBtn.addEventListener("click", rollDice);
freezeBtn.addEventListener("click", freezeScore);

let roundCount = 1;
let playerScore = 0;
let totalScore = 0;

roundCountEl.textContent = "Current round: " + roundCount;
playerScoreEl.textContent = "Current score: " + playerScore;
totalScoreEl.textContent = "Total score: " + totalScore;

function startGame() {
  const playerName = playerNameInput.value;
  playerDisplay.textContent = playerName;
  form.remove("form");
  game.style.visibility = "visible";
}

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
    alert("You won the game! " + " Amount of rounds: " + roundCount);
    totalScore = 0;
  }
}
