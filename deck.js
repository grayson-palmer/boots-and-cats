class Deck {
  constructor(cards) {
    this.cards = cards;
    this.matchedCards = [];
    this.selectedCards = [];
    // this.matches = [];
  }
  
  shuffle() {
    this.cards.sort(function() { return 0.5 - Math.random() });
  }
  
  checkSelectedCards() {
    console.log(this.selectedCards);
    if (this.selectedCards[0].image === this.selectedCards[1].image && this.selectedCards.length < 3) {
      this.moveToMatched();
      removeCards();
      congratulationScreen();
      this.selectedCards = [];
    } else {
      unflipCards();
      this.selectedCards = [];
    }
  }
  
  moveToMatched() {
    this.matchedCards.push(this.selectedCards[0], this.selectedCards[1]);
    this.cards[firstCard.id - 1].matched();
    this.cards[secondCard.id - 1].matched();
    updateMatchCount();
  }
}