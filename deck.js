class Deck {
  constructor(cards) {
    this.cards = cards;
    this.matchedCards = [];
    this.selectedCards = [];
    // this.matches = [];
  }
  
  shuffle() {
    var orig = this.cards
    console.log('PreShuf', orig);
    var shuf = this.cards.sort(function() { return 0.5 - Math.random() });
    console.log('PostShuf', shuf);
  }
  
  checkSelectedCards() {
    console.log(this.selectedCards);
    if (this.selectedCards[0].image === this.selectedCards[1].image) {
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
    updateMatchCount();
  }
}