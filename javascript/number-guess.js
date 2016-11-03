var secretNumber,guessCount,maxGuess,guess,newGuess;
function startGame(){
	//Randomly generate number and hold it outside of any functions so it doesn't change
	secretNumber = Math.floor((Math.random() * 10) + 1);
	//Set the counter outside of any function that may reset it
	guessCount = 0;
	//Max guesses allowed
	maxGuess = 5;
	guessNumber();
}

//Function we can return to if the value is wrong.  It accepts a string.
function guessNumber(msg) {
	//Add one to guess count
	guessCount++;
	//If the message is empty, we'll set a default message
	if(!msg){
		msg = "Guess a number between 1 and 100.";
	}
	//Pop up the guess box
	guess = prompt(msg);
  //Ensure guess is a an integer (good job)
  newGuess = parseInt(guess);
	if((guessCount+1) <= maxGuess){
		if (newGuess === secretNumber) {
			//They got it, tell them and don't loop back into this function
      alert("Great guess! That is the number. It took you " + guessCount + " tries!");
    } else if (newGuess < secretNumber) {
			//Bad guess, too low, prompt to try again
      guessNumber("Sorry that number is too small. Try again.");
    } else if (newGuess > secretNumber) {
			//Bad guess, too high, prompt to try again
      guessNumber("Sorry that number is too big. Try again.");
    }
	}else{
		if(confirm("Too many tries!  The correct number was "+secretNumber+"\nTry again?")){
			startGame();
		}
	}
	
}

startGame();



//terjemahan

var nomor,jmltebakan,maxtTebakan,tebakan,baruTebakan;
function startGame(){
	nomor = Math.floor((Math.random() * 10) + 1);
	jmlTebakan = 0;
	maxTebakan = 5;
	nomorTebakan();
}


function nomorTebakan(msg) {
	jmlTebakan++;
	if(!msg){
		msg = "masukkan angka 1 - 10.";
	}
	tebakan = prompt(msg);
  baruTebakan = parseInt(tebakan);
	if((jmlTebakan+1) <= maxTebakan){
		if (baruTebakan === nomor) {
      alert("Selamat kamu benar dalam" + jmlTebakan + " percobaan!");
    } else if (baruTebakan < nomor) {
      nomorTebakan("Nomor tertalu kecil, coba lagi");
    } else if (baruTebakan > nomor) {
      nomorTebakan("Nomor terlalu besar, coba lagi");
    }
	}else{
		if(confirm("Nomor yang benar adalah "+nomor+"\ncoba lagi?")){
			startGame();
		}
	}
	
}

startGame();