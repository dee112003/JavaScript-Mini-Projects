let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};
updateScore();

let result = "";
let playerMove = "";
let computerMove = "";

let isAutoPlaying = false;
let intervalId;
function autoplay() {
  if (!isAutoPlaying) {
    intervalId = setInterval(() => {
      const playerMove = compMove();
      rpcgame(playerMove);
      moves(playerMove);
    }, 1000);
    isAutoPlaying = true;
  } else {
    clearInterval(intervalId);
    isAutoPlaying = false;
  }
}

document.querySelector(".js-paper-button").addEventListener("click", () => {
  rpcgame("paper");
  moves("paper");
});

document.querySelector(".js-rock-button").addEventListener("click", () => {
  rpcgame("rock");
  moves("rock");
});

document.querySelector(".js-scissors-button").addEventListener("click", () => {
  rpcgame("scissors");
  moves("scissors");
});

document.body.addEventListener("keydown", (event) => {
  if (event.key == "r" || event.key == "R") {
    rpcgame("rock");
    moves("rock");
  } else if (event.key == "p" || event.key == "P") {
    rpcgame("paper");
    moves("paper");
  } else if (event.key == "s" || event.key == "S") {
    rpcgame("scissors");
    moves("scissors");
  } else if (event.key == "q") {
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    localStorage.removeItem("score");
    document.querySelector(".js-Score").innerHTML = "";
    document.querySelector(".js-result").innerHTML = "";
    document.querySelector(".move").innerHTML = "";
  }
});

document.querySelector;

function rpcgame(playerMove) {
  const computerMove = compMove();

  if (playerMove === "rock") {
    if (computerMove === "rock") {
      result = "Tie";
    } else if (computerMove === "paper") {
      result = "You lose";
    } else if (computerMove === "scissors") {
      result = "You Win";
    }
  } else if (playerMove === "paper") {
    if (computerMove === "rock") {
      result = "You Win";
    } else if (computerMove === "paper") {
      result = "Tie";
    } else if (computerMove === "scissors") {
      result = "You lose";
    }
  } else if (playerMove === "scissors") {
    if (computerMove === "rock") {
      result = "You lose";
    } else if (computerMove === "paper") {
      result = "You Win";
    } else if (computerMove === "scissors") {
      result = "Tie";
    }

    console.log(playerMove);
  }

  moves();

  if (result === "You Win") {
    score.wins += 1;
  } else if (result === "You lose") {
    score.losses += 1;
  } else if (result === "Tie") {
    score.ties += 1;
  }

  updateResult();

  localStorage.setItem("score", JSON.stringify(score));

  updateScore();

  // alert(
  //   `You picked ${playerMove} Computer picked ${computerMove}, ${result} \n\nCurrent Score Wins: ${score.wins}, losses: ${score.losses}, Ties: ${score.ties}`
  // );
}
function compMove() {
  const randomNumber = Math.random();
  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "rock";
  } else if (randomNumber > 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "paper";
  } else if (randomNumber > 2 / 3 && randomNumber < 1) {
    computerMove = "scissors";
  }
  return computerMove;
}

function updateScore() {
  document.querySelector(
    ".js-Score"
  ).innerHTML = `Wins: ${score.wins}, losses: ${score.losses}, Ties: ${score.ties}`;
}

function updateResult() {
  let r = (document.querySelector(".js-result").innerHTML = `${result}`);
}

function moves(pmove = "") {
  document.querySelector(
    ".move"
  ).innerHTML = `You <img class="icon-move-png" src="static/images/${pmove}-emoji.png" alt="" />
<img class="icon-move-png" src="static/images/${computerMove}-emoji.png" alt="" />
Computer`;
}
