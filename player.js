class Player {
  constructor(name) {
    this.name = name;
    this.roundCount = 0;
    this.time = null;
  }
  addRoundCount() {
    this.roundCount++;
  }
  setPlayerFinishTime(time) {
    this.addRoundCount();
    this.time = time;
  }

  updateLeaderBoard() {
    var storageLeaderBoard = retrieveLeaderBoard();
    var fromPlayer = {'name': this.name, 'time': this.time};
    // fromPlayer = JSON.stringify(fromPlayer);
    storageLeaderBoard.push(fromPlayer);
    // storageLeaderBoard = ;
    localStorage.setItem('leaderBoard', JSON.stringify(storageLeaderBoard));
  }
}