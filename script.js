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
    
    console.log();
  }
}
// if (cardsMatched === thecards.length / 2) {

//   gameOver();
// }

function countDown() {
  let seconds = 100;
  const countdown = setInterval(function() {
      document.getElementById('remaining-time').innerHTML = seconds;
      seconds--;

      if (seconds < 0) {
          clearInterval(countdown);
          document.getElementById('countdown').innerHTML = "Countdown stopped";
      }
  }, 100000); 
}
countDown(); 


const startButton = document.getElementById('start-button');
const timerElement = document.getElementById('remaining-time');

let remainingTime = 100; 
let timerInterval; 

function startTimer() {
    timerElement.textContent = remainingTime;
    timerInterval = setInterval(function() {
        remainingTime--;
        timerElement.textContent = remainingTime;

        if (remainingTime === 0) {
            clearInterval(timerInterval);
          }
    }, 1000); 
}


startButton.addEventListener('click', function() {
    startButton.disabled = true;
    startTimer();
});


// In the checkWin() function
function checkWin() {
  // Check if all ace piles contain 16 cards each, indicating a win
  if (acePiles.every(acePile => acePile.length === 16)) {
      winState = true;

      // TODO: Use DOM manipulation methods to display a win message.
      // Consider creating a new div element, setting its text content and appending it to the body or another container element on the page.
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
