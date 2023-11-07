// const blackjackDeck = getDeck();
function pick(arr) {
  const index = Math.floor(Math.random() * arr.length);
  const eachCard = arr[index];

  return arr[index];
}
const blackjackDeck = function () {
  const values = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A",
  ];
  const suits = ["Clubs", "Spades", "Hearts", "Diamonds"];

  const displayVal = pick(values);
  const suit = pick(suits);

  let cardValue = "";
  switch (displayVal) {
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
    case "10":
      cardValue = displayVal;
      break;
    case "J":
      cardValue = 10;
      break;
    case "Q":
      cardValue = 10;
      break;
    case "K":
      cardValue = 10;
      break;
    case "A":
      cardValue = 11;

      break;
  }
  if (displayVal === "A") {
    cardValue = 1;
  }
  cardDraw = {
    value: parseInt(cardValue),
    displayVal: displayVal,
    suit: suit,
  };

  return cardDraw;
};

// /**

//  * Represents a card player (including dealer).
//  * @constructor
//  * @param {string} name - The name of the player
//  */
// class CardPlayer {}; //TODO
const hand = [];
class CardPlayer {
  constructor(name) {
    this.name = name;
    this.hand = hand;
  }

  drawCard() {
    this.hand.push(blackjackDeck());
    return hand;
  }
  calcPoints() {
    let totalValue = 0;
    for (let card of this.hand) {
      const total = card.value;

      totalValue += total;

      return totalValue;
    }
  }
}

blackjackDeck();

// // CREATE TWO NEW CardPlayers
// const dealer; // TODO
// const player; // TODO

const player = new CardPlayer("danh");
const dealer = new CardPlayer("dealer");
console.log(player.drawCard());
console.log(player.drawCard());
console.log(player.calcPoints());
// /**
//  * Calculates the score of a Blackjack hand
//  * @param {Array} hand - Array of card objects with val, displayVal, suit properties
//  * @returns {Object} blackJackScore
//  * @returns {number} blackJackScore.total
//  * @returns {boolean} blackJackScore.isSoft
//  */
// const calcPoints = (hand) => {
//   // CREATE FUNCTION HERE

// }

// /**
//  * Determines whether the dealer should draw another card.
//  *
//  * @param {Array} dealerHand Array of card objects with val, displayVal, suit properties
//  * @returns {boolean} whether dealer should draw another card
//  */
// const dealerShouldDraw = (dealerHand) => {
//   // CREATE FUNCTION HERE

// }

// /**
//  * Determines the winner if both player and dealer stand
//  * @param {number} playerScore
//  * @param {number} dealerScore
//  * @returns {string} Shows the player's score, the dealer's score, and who wins
//  */
// const determineWinner = (playerScore, dealerScore) => {
//   // CREATE FUNCTION HERE

// }

// /**
//  * Creates user prompt to ask if they'd like to draw a card
//  * @param {number} count
//  * @param {string} dealerCard
//  */
// const getMessage = (count, dealerCard) => {
//   return `Dealer showing ${dealerCard.displayVal}, your count is ${count}.  Draw card?`
// }

// /**
//  * Logs the player's hand to the console
//  * @param {CardPlayer} player
//  */
// const showHand = (player) => {
//   const displayHand = player.hand.map((card) => card.displayVal);
//   console.log(`${player.name}'s hand is ${displayHand.join(', ')} (${calcPoints(player.hand).total})`);
// }

// /**
//  * Runs Blackjack Game
// */
const startGame = function () {
  player.drawCard();
  dealer.drawCard();
  player.drawCard();
  dealer.drawCard();
};
console.log(startGame());
//  let playerScore = calcPoints(player.hand).total;
//   showHand(player);

//   while (playerScore < 21 && confirm(getMessage(playerScore, dealer.hand[0]))) {
//     player.drawCard();
//     playerScore = calcPoints(player.hand).total;
//     showHand(player);
//   }
//   if (playerScore > 21) {
//     return 'You went over 21 - you lose!';
//   }
//   console.log(`Player stands at ${playerScore}`);

//   let dealerScore = calcPoints(dealer.hand).total;
//   while (dealerScore < 21 && dealerShouldDraw(dealer.hand)) {
//     dealer.drawCard();
//     dealerScore = calcPoints(dealer.hand).total;
//     showHand(dealer);
//   }
//   if (dealerScore > 21) {
//     return 'Dealer went over 21 - you win!';
//   }
//   console.log(`Dealer stands at ${dealerScore}`);

//   return determineWinner(playerScore, dealerScore);
// }
// // console.log(startGame());
