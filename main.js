var playerInputScreen = document.querySelector('.player-input-screen');
var player1NameError = document.querySelector('.player-1-name-error');
var player1Name = document.querySelector('#player-1-name');
var directionsScreen = document.querySelector('.directions-screen');
var gameScreen = document.querySelector('.game-screen');
var allCards = null;
var deck = null;

playerInputScreen.addEventListener('click', inputHandler);
directionsScreen.addEventListener('click', directionsHandler)
// gameScreen.addEventListener('click', gameHandler);
// allCards.forEach(cardEvent => cardEvent.addEventListener('click', flipCard));

// ********** INPUT SCREEN HANDLER AND FUNCTIONS ********** //

function inputHandler(event) {
  if (event.target.classList.contains('play-game-button')) {
    if (inputNotBlank()) {
      playerInputScreen.classList.toggle('hide');
      directionsScreen.classList.toggle('hide');
      directionsInfo();
    }
  }
}

function inputNotBlank() {
  if (player1Name.value) {
    return true;
  } else {
    player1NameError.removeAttribute('hidden');
    return false;
  }
}

// ********** DIRECTION SCREEN HANDLER AND FUNCTIONS ********** //

function directionsInfo() {
  directionsScreen.insertAdjacentHTML('beforeend', 
`<div class="directions-container">
  <h2>Welcome ${player1Name.value}!</h2>
  <p>The goal of the game is to find all 5 pairs of cards as quickly as possible. The player that finds the greatest numbers of pairs, wins.</p>
  <p>To begin playing, the player whose name is highlighted can click any card in the card pile. It will flip over and reveal a picture of Beyoncé. Click another card. If they match, they will disappear and you will have completed a match! If they don’t, you’ll have three seconds to look at them before they flip back over. Then it’s time for the other player to try!</p>
  <p>After you play, you’ll see the name of the final winner and how long it took to win the game.</p>
  <button type="button" class="play-game-button" id="directions-play-button">Play Game</button>
</div>`)
}

function directionsHandler(event) {
  if (event.target.classList.contains('play-game-button')) {
    directionsScreen.classList.toggle('hide');
    gameScreen.classList.toggle('hide');
    event.target.parentElement.parentElement.parentElement.parentElement.classList.toggle('background-color');
    player1StatInsert(event);
    insertCards(event);
  }
}

// ********** GAME SCREEN HANDLER AND FUNCTIONS ********** //

// function gameHandler(event) {
//   if (event.target.parentElement.classList.contains('card')){
//     flipCard(event);
//   }
//   if (deck.selectedCards.length > 1) {
//     if (deck.checkSelectedCards()) {
//       //Make cards disappear
//     }
//     setTimeout(flipCardsBack, 1500);
    
//   }
// }

function flipCard() {
  this.classList.toggle('flip-card');
  console.log(this);
  // deck.cards[this.target.].changeHasFlipped();
}

function flipCardsBack() {
  var card1 = null;
  var card2 = null;
  var num1 = deck.selectedCards[0].cardNum;
  var num2 = deck.selectedCards[1].cardNum;
  console.log(deck.selectedCards);
  card1 = document.querySelector(`.card${num}`);
  card2 = document.querySelector(`.card${num}`);
  // card1.classList.remove('flip-card');
  // card2.classList.remove('flip-card');
  changeHasFlipped(num1);
  changeHasFlipped(num2);
  this.selectedCards = [];
}

function player1StatInsert(event) {
  event.target.parentElement.parentElement.parentElement.children[2].children['0'].insertAdjacentHTML('beforeend',
  `<div class="player-1-display">
    <h3>${player1Name.value}</h3>
    <p hidden>Top Player #</p>
  </div>
  <div class="matches-this-round">
    <p>Matches this round</p>
    <p class="number-rounds">5</p>
  </div>
  <div>
  <p>Game Wins</p>
  </div>`);
}

function insertCards(event) {
  deck = new Deck(populateDeck());
  for (var i = 0; i < 10; i++) {
    event.target.parentElement.parentElement.parentElement.children[2].children['1'].insertAdjacentHTML('beforeend',
    `<div class="card card${deck.cards[i].cardNum}" id="${deck.cards[i].cardNum}">
      <img class="card-face" src=${deck.cards[i].image}>
      <img class="card-back" src="./assets/card-back.svg" alt="card back">
    </div>`)
  }
  allCards = gameScreen.querySelectorAll('.card');
  allCards.forEach(card => card.addEventListener('click', flipCard));
}

function populateDeck() {
  var cards = [];
  var image = ['./assets/boot-1.jpg', './assets/boot-1.jpg', './assets/boot-2.jpg', './assets/boot-2.jpg', './assets/boot-3.jpg', './assets/boot-3.jpg', './assets/cat-1.jpg', './assets/cat-1.jpg', './assets/cat-2.jpg', './assets/cat-2.jpg'];
  for (var i = 0; i < 10; i++) {
    cards.push(new Card(image[i], (i + 1)));
  }
  return cards;
}