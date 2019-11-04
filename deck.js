class Deck {
  constructor(cards) {
    this.cards = cards;
    this.matchedCards = [];
    this.selectedCards = [];
    this.matches = [];
  }
  shuffle() {

  }
  checkSelectedCards() {
    if (selectedCards[0].image === selectedCards[1].image) {
      this.matchedCards.push(this.selectedCards[0], this.selectedCards[1]);
      this.selectedCards = [];
    } else {
      this.selectedCards = [];
    }
  }
  moveToMatched() {

  }
}