console.log('sanityCheck')
//Get all the elements by name "thecard" and stores them into an array
const thecards =
  document.getElementsByClassName("thecard");

// //define an array that we can use to store clicks
 const clickedCards = [];
 // save 2 cards and compare to check for match
 
console.log(clickedCards)
// //declare a variable to score the users code
const usersCode = 0;
// Loop through the array of cards and add an event listener function to each card that triggers the flip when the card is clicked
for (let i = 0; i < thecards.length; i++) {
  (function(index) {
    thecards[index].addEventListener("click", function(e) {
      thecards[index].classList.toggle("is-flipped");
   clickedCards.push(e.target);
      console.log(clickedCards);
    //console.log the background image property of the card that has been clicked on
      // console.log(thecards[index].style.backgroundImage);
    //add the background image the array of the cards
    // const cardImage =                   
    // url("./https://mario.wiki.gallery/images/4/4d/MKT_Icon_GrandStar.png")
    // url("./https://static.vecteezy.com/system/resources/previews/018/819/006/original/earth-cartoon-icon-png.png")
    //   ];
      
    //if there is only one thing in the array we are not going to do anything
      
    // if there are two things in the array we are going to compare it to the other thing in the array
    //if they are the same we are gonna have them open and we are gonna give the user a point
      //if they are not the same we are going to flip the cards over
     //in both cases we are going to have to clear the array
      //if the user scores 8 points they win
    });
  })(i);
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