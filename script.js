const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const diceEl = document.querySelector(".dice");

const score0El = document.querySelector("#score--0");
const score1El = document.querySelector("#score--1");

const current0El = document.querySelector("#current--0");
const current1El = document.querySelector("#current--1");

const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");

diceEl.classList.add("hidden");
score0El.textContent = 0;
score1El.textContent = 0;

current0El.textContent = 0;
current1El.textContent = 0;
let joriyball = 0;
let navbat = 0;
let score = [0, 0];
let playing = true;

function rollDice() {
  if (playing === true) {
    diceEl.classList.remove("hidden");
    let diceNumber = Math.trunc(Math.random() * 6) + 1;
    //   console.log(diceNumber);
    diceEl.src = `dice-${diceNumber}.png`;

    if (diceNumber !== 1) {
      joriyball += diceNumber;
      document.querySelector(`#current--${navbat}`).textContent = joriyball;
    } else if (diceNumber === 1) {
      navbatAlmashtir();
    }
  }
}
function navbatAlmashtir() {
  document.querySelector(`#current--${navbat}`).textContent = 0;
  joriyball = 0;
  if (navbat === 0) {
    navbat = 1;
  } else {
    navbat = 0;
  }
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
}

function ballniSaqlash() {
  if (playing === true) {
    score[navbat] = score[navbat] + joriyball;
    document.querySelector(`#score--${navbat}`).textContent = score[navbat];

    if (score[navbat] >= 20) {
      document
        .querySelector(`.player--${navbat}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${navbat}`)
        .classList.add("player--active");
      playing = false;
    } else {
      navbatAlmashtir();
    }
  }
}
function newGame() {
  diceEl.classList.add("hidden");
  score0El.textContent = 0;
  score1El.textContent = 0;

  current0El.textContent = 0;
  current1El.textContent = 0;
  joriyball = 0;
  navbat = 0;
  score = [0, 0];
  playing = true;
  document.querySelector(`.player--0`).classList.add("player--active");
  document.querySelector(`.player--1`).classList.remove("player--active");
  document.querySelector(`.player--0`).classList.add("player--winner");
  document.querySelector(`.player--1`).classList.remove("player--winner");
}
btnNew.addEventListener("click", newGame);
btnRoll.addEventListener("click", rollDice);
btnHold.addEventListener("click", ballniSaqlash);
