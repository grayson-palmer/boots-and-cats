class Deck {
  constructor() {
    this.cards = this.populateDeck();
    this.matchedCards = [];
    this.selectedCards = [];
    this.matches = [];
  }
  populateDeck() {
    var cards = [];
    var name = ['boot-1', 'boot-2', 'boot-3', 'cat-1', 'cat-2'];
    var image = ['./assets/boot-1.jpg', './assets/boot-2.jpg', './assets/boot-3.jpg', './assets/cat-1.jpg', './assets/cat-2.jpg'];
    for (var i = 0; i < 5; i++) {
      cards.push(new Card(name[i], image[i]));
      cards.push(new Card(name[i], image[i]));
    }
    return cards;
  }
}