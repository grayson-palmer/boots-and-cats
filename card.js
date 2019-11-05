class Card {
  constructor(image, cardNum) {
    this.image = image;
    this.cardNum = cardNum
    this.matched = false;
    this.hasFlipped = false;
  }
  changeHasFlipped(event) {
    event.target.parentElement.classList.toggle('flip-card');
    this.hasFlipped = !this.hasFlipped;
    deck.selectedCards.push(this);
  }
  matched() {
    this.matched = true;
  }
}