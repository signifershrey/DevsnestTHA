const totalmoves = document.querySelector("#move_counter");
const score = document.querySelector("#score");
const cards = document.querySelectorAll(".card");
// console.log(cards);

let currscore = 0;
let remainingmoves = 25;
totalmoves.innerHTML = remainingmoves;
score.innerHTML = currscore;

let flag = 14;

//variables
var isFlipped = false;
var firstCard;
var secondCard;

cards.forEach((card) => card.addEventListener("click", flip));

function flip() {
  // console.log("Card flipped");
  console.log(this);
  //this holds the particular card
  // remainingmoves -= 1;
  this.classList.add("flip");
  if (!isFlipped) {
    isFlipped = true;
    firstCard = this;
    remainingmoves -= 1;
  } else {
    secondCard = this;
    console.log(firstCard);
    console.log(secondCard);

    // totalmoves.innerHTML = remainingmoves;
    // score.innerHTML = currscore;
    checkIt();
  }
}

function checkIt() {
  //   console.log("Checking...");
  totalmoves.innerHTML = remainingmoves;
  score.innerHTML = currscore;
  if (firstCard.dataset.image === secondCard.dataset.image) {
    currscore += 1;
    success();
  } else {
    fail();
  }
}

function success() {
  //   console.log("Success");
  totalmoves.innerHTML = remainingmoves;
  score.innerHTML = currscore;
  firstCard.removeEventListener("click", flip);
  secondCard.removeEventListener("click", flip);
  flag += 2;
  if (flag == cards.length) {
    // alert("Congratulations!");
    console.log("251e36514u12");
    realistic();
  }
  reset();
}

function fail() {
  //   console.log("Failed");
  totalmoves.innerHTML = remainingmoves;
  score.innerHTML = currscore;
  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    reset();
  }, 1000);
}

function reset() {
  isFlipped = false;
  firstCard = null;
  secondCard = null;
}

(function shuffle() {
  cards.forEach((card) => {
    //generating Random Index here
    var index = Math.floor(Math.random() * 16);
    //like a flex box
    card.style.order = index;
  });
})();

///////////////////////////
function realistic() {
  var count = 200;
  var defaults = {
    origin: { y: 0.7 },
  };

  function fire(particleRatio, opts) {
    confetti(
      Object.assign({}, defaults, opts, {
        particleCount: Math.floor(count * particleRatio),
      })
    );
  }

  fire(0.25, {
    spread: 26,
    startVelocity: 55,
  });
  fire(0.2, {
    spread: 60,
  });
  fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 0.8,
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 25,
    decay: 0.92,
    scalar: 1.2,
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 45,
  });
}
