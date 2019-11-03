var playerInputScreen = document.querySelector('.player-input-screen');
var player1NameError = document.querySelector('.player-1-name-error');
var player1Name = document.querySelector('#player-1-name');

playerInputScreen.addEventListener('click', inputClickHandler);

function inputClickHandler(event) {
  if (event.target.classList.contains('play-game-button')) {
    if (inputNotBlank()) {
      playerInputScreen.classList.toggle('hide');
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

