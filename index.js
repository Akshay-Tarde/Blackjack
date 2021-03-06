let hasBlackJack = false;
let isAlive = false;
let arrayOfCards = [];
let sum = 0;
let message = "";
console.log(sum);

let player = {
  name: "Akshay",
  chips: 300,
};

let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.querySelector("#cards-el");

let playerEl = document.querySelector("#player-el");
playerEl.textContent = player.name + " $" + player.chips;

function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber === 1) {
    return 11;
  } else if (randomNumber >= 10) return 10;
  else return randomNumber;
}

function startGame() {
  isAlive = true;
  hasBlackJack = false;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  arrayOfCards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  console.log("startgame triggered");
  renderGame();
}

function renderGame() {
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You have won the game! You've got BlackJack.";
    hasBlackJack = true;
  } else {
    message = "You've lost this game! Try again.";
    isAlive = false;
  }
  messageEl.textContent = message;

  sumEl.textContent = "Sum: " + sum;

  cardsEl.textContent = "Cards: ";
  let k = arrayOfCards.length;
  for (let i = 0; i < k; i++) {
    cardsEl.textContent += arrayOfCards[i] + " ";
  }

  console.log(message);
}

function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    let anotherCard = getRandomCard();
    sum += anotherCard;
    arrayOfCards.push(anotherCard);
    //  console.log("new card triggered")
    renderGame();
  }
}
