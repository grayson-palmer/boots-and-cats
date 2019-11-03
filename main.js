var directionsScreen = document.querySelector('.directions-screen');
var playerInputScreen = document.querySelector('.player-input-screen');
var player1NameError = document.querySelector('.player-1-name-error');
var player1Name = document.querySelector('#player-1-name');
var gameScreen = document.querySelector('.game-screen');
var deck = [];
var counter = 0;

playerInputScreen.addEventListener('click', inputClickHandler);
gameScreen.addEventListener('click', gameHandler);

function inputClickHandler(event) {
  if (event.target.classList.contains('play-game-button')) {
    if (inputNotBlank()) {
      playerInputScreen.classList.toggle('hide');
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

function gameHandler(event) {
  if (event.path[1].classList.contains('card')){
    flipCard(event);
  }
}

function flipCard(event) {
  event.path[1].classList.toggle('flip-card');
  // console.log(event);
}