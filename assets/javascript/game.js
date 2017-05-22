<script type="text/javascript">

    $( document ).ready(function(){

      // Select a random number between 12-120 at the start of the game.

      var Random=Math.floor(Math.random()*101+19)

      // Add the random number generated to the randomNumber id in the html.

      $('#randomNumber').text(Random);

      // Select random numbers between 1 - 12 for each of the four crystals.

        var crystal1= Math.floor(Math.random()*11+1)

        var crystal2= Math.floor(Math.random()*11+1)

        var crystal3= Math.floor(Math.random()*11+1)

        var crystal4= Math.floor(Math.random()*11+1)
    
      // Variables to track the score.

        var userTotal= 0;
        var wins= 0;
        var losses = 0;

      // Game reset.

      $('#numberWins').text(+ wins);

      $('#numberLosses').text(+ losses);

    function reset(){
      Random=Math.floor(Math.random()*101+19);

     $('#randomNumber').text(Random);

     crystal1= Math.floor(Math.random()*11+1);

     crystal2= Math.floor(Math.random()*11+1);

     crystal3= Math.floor(Math.random()*11+1);

     crystal4= Math.floor(Math.random()*11+1);

     userTotal= 0;

     $('#finalTotal').text(userTotal);

     }

    //adds the wins to the userTotal.

    function win(){

    alert("You won!");

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

   console.log("New userTotal= " + userTotal);

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

   console.log("New userTotal= " + userTotal);

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

   console.log("New userTotal= " + userTotal);

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

   console.log("New userTotal= " + userTotal);

   $('#finalTotal').text(userTotal);

  // Sets up the win/lose conditions

  if (userTotal == Random){
    win();
   }

  else if ( userTotal > Random){
    lose();
   }
 });  
});
    
</script>
