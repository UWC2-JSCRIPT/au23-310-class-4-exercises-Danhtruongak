/**
 * Returns an array of 52 Cards
 * @returns {Array} deck - a deck of cards
 */
const getDeck = () => {
  const deck = [];
  const suits = ["Clubs", "Dimonds", "Hearts", "Spades"];

  for (let i = 0; i < suits.length; i++) {
    //4 suits//
    for (let j = 2; j <= 14; j++) {
      let cardEach = j;
      let displayVal = "";
      switch (cardEach) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
          displayVal = cardEach;
          break;
        case 11:
          displayVal = "jack";
          break;
        case 12:
          displayVal = "queen";
          break;
        case 13:
          displayVal = "king";
          break;
        case 14:
          displayVal = "ace";
          break;
      }

      const card = {
        val: cardEach,
        displayVal: displayVal,
        suit: suits[i],
      };
      console.log(card);
      if (displayVal === "ace") {
        card.val = 11;
      }

      deck.push(card);
    }
  }

  return deck;
};

// CHECKS
const deck = getDeck();

console.log(`Deck length equals 52? ${deck.length === 52}`);

const randomCard = deck[Math.floor(Math.random() * 52)];

console.log(randomCard.val);
const cardHasVal =
  randomCard && randomCard.val && typeof randomCard.val === "number";
console.log(`Random card has val? ${cardHasVal}`);

const cardHasSuit =
  randomCard && randomCard.suit && typeof randomCard.suit === "string";
console.log(`Random card has suit? ${cardHasSuit}`);

const cardHasDisplayVal =
  randomCard &&
  randomCard.displayVal &&
  typeof randomCard.displayVal === "string";
console.log(`Random card has display value? ${cardHasDisplayVal}`);
