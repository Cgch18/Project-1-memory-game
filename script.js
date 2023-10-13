console.log("sanityCheck");
//Get all the elements by name "thecard" and stores them into an array

const thecards = document.getElementsByClassName("thecard");

// //define an array that we can use to store clicks
let clickedCards = [];

// save 2 cards and compare to check for match
let flips = 0;

//Check how many cards the players has matched 
let cardsMatched = 0;

console.log(clickedCards);

// //declare a variable to score the users code
const usersCode = 0;

// Loop through the array of cards and add an eventListener function to each card that triggers the flip when the card is clicked
for (let i = 0; i < thecards.length; i++) {
  console.log("executing for loop");
  thecards[i].addEventListener("click", flipCard(thecards[i], i));
}


function flipCard(passedInElement, index){
  return function(e) {
    passedInElement.classList.toggle("flip-card");
    flips++;

    document.getElementById("flip").innerHTML = flips;

    clickedCards.push(index);

    if (clickedCards.length == 2) {
      checkMatch(thecards, clickedCards);
      clickedCards = [];
    }
  };
}

function checkMatch(thecards, clickedCards){
  if (thecards[clickedCards[0]].id != thecards[clickedCards[1]].id) {
    console.log("Cards don't match");
    setTimeout(()=>{
      thecards[clickedCards[0]].classList.toggle("flip-card");
      thecards[clickedCards[1]].classList.toggle("flip-card");
    }, 1000);
  }
  else {
    console.log("Cards matched");
    cardsMatched++;
    // code to disable click listener
    console.log();
  }
}

// let selected:
//   for (const card of cards) {
//   card.addEventListener("click" , function() {
//     if (!selected) {
//       selected = card;
//   }
//     if (selected == card)
//       return;
//     if (selected.classList[0] == card.classList[0])
//       onMatch(selected, card);
//   })
// }

// const matchCards = function () {
//   let cards = document.querySelectorAll(".thecard");
//   let first;
//   let second;

// }

// const board = document.querySelector(".board")
// let cards = [];
// let firstCard, secondCard;
// let lockboard = false;
// let score = 0;

// document.querySelector(".score").textContent = score;
// fetch()

// thecards[i].addEventListener("click", function (i) {
//     console.log("You clicked on " + thecards[i]);
//     //thecards[i].classList.toggle("is-flipped");
// })
