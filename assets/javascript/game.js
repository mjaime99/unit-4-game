var totalTarget = Math.floor(Math.random() * 120) + 19; 
var card1 = Math.floor(Math.random() * 12) + 1; 
var card2 = Math.floor(Math.random() * 12) + 1;
var card3 = Math.floor(Math.random() * 12) + 1;
var card4 = Math.floor(Math.random() * 12) + 1;
var wins = 0;
var losses = 0;
var userScore = 0;

function checkWinner() {
    if (userScore === totalTarget) {
      wins++;
      $('#wins').text(wins);
      alert("You win!");
      reset();
    }  

    if (userScore > totalTarget) {
      losses++;
      $('#losses').text(losses); 
      alert("You lost!");
      reset();
    }
}

function reset() { 
  userScore = 0;
  $('#total-target').text(totalTarget);
  $('#final-total').text(userScore);
}

//--Start Joker Card--

//Joker Card1
$('#joker1').on('click', function() {
    userScore += card1;
    $('#final-total').text(userScore);
    checkWinner();
});

//Joker Card2
$('#joker2').on('click', function() {
    userScore += card2;
    $('#final-total').text(userScore);
    checkWinner();
});

//Joker Card3
$('#joker3').on('click', function() {
    userScore += card3;
    $('#final-total').text(userScore);
    checkWinner();
});

//Joker Card4
$('#joker4').on('click', function() {
    userScore += card4;
    $('#final-total').text(userScore);
    checkWinner();
});
//--End Joker Cards--
$(document).ready(function() {
  $('#total-target').text(totalTarget);
}); 