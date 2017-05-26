 $( document ).ready(function(){

      // Select a random number between 12-120 at the start of the game.
      
      var Random=Math.floor(Math.random() * 101) + 19;

      // Add the random number generated to the randomNumber id in the html.

      $('#randomNumber').text(Random);

      // Select random numbers between 1 - 12 for each of the four crystals.

      var crystal1, crystal2, crystal3, crystal4;

      function crystalNumber () {

        crystal1= Math.floor(Math.random() * 12) + 1;

        crystal2= Math.floor(Math.random() * 12) + 1;

        crystal3= Math.floor(Math.random() * 12) + 1;

        crystal4= Math.floor(Math.random() * 12) + 1;
      }

      crystalNumber();
    
      // Variables to track the score.

        var userTotal= 0;
        var wins= 0;
        var losses = 0;

      // Game reset.

      $('#numberWins').text("Wins: " + wins);

      $('#numberLosses').text("Losses: " + losses);

    function reset(){

      Random=Math.floor(Math.random() *101) + 19;

      $('#randomNumber').text(Random);

      crystalNumber();

      userTotal= 0;

      $('#finalTotal').text(userTotal);

     }

    //adds the wins to the userTotal.

    function win(){

      alert("You win!");

      wins++;

      $('#numberWins').text("Wins:  " + wins);

      reset();
    }

    //adds the losses to the userTotal.

    function lose(){

      alert ("You lose!");

      losses++;

      $('#numberLosses').text("Losses:  " + losses);

      reset()

}
  // Sets up the click ability for crystals.

    $('#crystalOne').on ('click', function(){

      userTotal = userTotal + crystal1;

      $('#finalTotal').text(userTotal);

// Sets up the win/lose conditions

  if (userTotal == Random){
    win();
       }

  else if ( userTotal > Random){
    lose();
       }  

 }) 

 $('#crystalTwo').on ('click', function(){

   userTotal = userTotal + crystal2;

   $('#finalTotal').text(userTotal);

// Sets up the win/lose conditions

  if (userTotal == Random){
    win();
       }

  else if ( userTotal > Random){
    lose();
   }

 }) 

  $('#crystalThree').on ('click', function(){
   
   userTotal = userTotal + crystal3;

   $('#finalTotal').text(userTotal);

// Sets up the win/lose conditions

  if (userTotal == Random){
    win();
  }

  else if ( userTotal > Random){
    lose();
  }
 }) 

  $('#crystalFour').on ('click', function(){

   userTotal = userTotal + crystal4;

   $('#finalTotal').text(userTotal);

  // Sets up the win/lose conditions

  if (userTotal == Random){
    win();
   }

  else if ( userTotal > Random){
    lose();
   }
 })
 }); 
    