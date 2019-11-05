var playerInputScreen = document.querySelector('.player-input-screen');
var player1NameError = document.querySelector('.player-1-name-error');
var player1Name = document.querySelector('#player-1-name');
var directionsScreen = document.querySelector('.directions-screen');
var gameScreen = document.querySelector('.game-screen');
var allCards = null;
var deck = null;
var firstCard = null;
var secondCard = null;
var flippedCard = false;
var playerName = null;
var timer = 0;

playerInputScreen.addEventListener('click', inputHandler);
directionsScreen.addEventListener('click', directionsHandler);
// gameScreen.addEventListener('click', gameHandler);

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
    playerName = new Player(player1Name.value);
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
  <h2>Welcome ${playerName.name}!</h2>
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
//   if (deck.matchedCards.length === 5) {
//     console.log('made it')
//     // gameScreen.childNode[1].insertAdjacentHTML('beforeend',
//     // `
//     // <p class="game-complete">YOU MADE IT</p>
//     // `)
//   }
// }

function flipCard() {
  timerHandler();
  this.classList.toggle('flip-card');
  if (!flippedCard) {
    flippedCard = true;
    firstCard = this;
    deck.cards[firstCard.id - 1].changeHasFlipped();
    deck.selectedCards.push(deck.cards[firstCard.id - 1]);
    return;
  } else {
    flippedCard = false;
    secondCard = this;
    deck.cards[secondCard.id - 1].changeHasFlipped();
    deck.selectedCards.push(deck.cards[secondCard.id - 1]);
  }
  deck.checkSelectedCards();
}

function unflipCards() {
  setTimeout(function() {
    firstCard.classList.remove('flip-card');
    secondCard.classList.remove('flip-card');
  }, 800);
  deck.cards[firstCard.id - 1].changeHasFlipped();
  deck.cards[secondCard.id - 1].changeHasFlipped();
}

// function removeAnimation() {
//   setTimeout(function() {
//     firstCard.classList.add('remove-card');
//     secondCard.classList.add('remove-card');
//   }, 1000);
// }

function removeCards() {
  setTimeout(function() {
    firstCard.remove();
    secondCard.remove();
  }, 800);
}

function player1StatInsert(event) {
  event.target.parentElement.parentElement.parentElement.children[2].children['0'].insertAdjacentHTML('beforeend',
  `<div class="player-1-display">
    <h3>${playerName.name}</h3>
    <p hidden>Top Player #</p>
  </div>
  <div class="matches-this-round">
    <p>Matches this round</p>
    <p class="number-matches">0</p>
  </div>
  <div>
  <p>Game Wins</p>
  </div>`);
}

function updateMatchCount() {
  var numberMatches = document.querySelector('.number-matches');
  numberMatches.innerHTML = deck.matchedCards.length / 2;
}

function insertCards(event) {
  deck = new Deck(populateDeck());
  deck.shuffle();
  for (var i = 0; i < 10; i++) {
    event.target.parentElement.parentElement.parentElement.children[2].children['1'].insertAdjacentHTML('beforeend',
    `<div class="card card${i + 1}" id="${i + 1}">
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
  for (var i = 0; i < image.length; i++) {
    cards.push(new Card(image[i], (i + 1)));
  }
  return cards;
}

function congratulationScreen() {
  if (deck.matchedCards.length / 2 >= 5) {
    gameScreen.children[1].insertAdjacentHTML('beforeend',
    `
    <div class="game-complete">
    <p>You did it!</p>
    <p>Great Job ${playerName.name}!</p>
    <p>Time: ${timeDisplay()}</p>
    </div>
    `);
  }
}

function timerIncrement() {
  timer++
  if (deck.matchedCards.length / 2 >= 5){
    clearInterval(interval)
  }
}

function timerHandler() {
  var interval = setInterval(timerIncrement, 1000);
}

function timeDisplay() {
  var min = Math.floor(timer / 60);
  var sec = timer % 60;
  return `${min}:${sec}`;
}
