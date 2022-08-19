/*MOTUS GAME*/

/*
* At first, I will implement 10 words of 7 characters. 
* Each time the game is run, one word is randomly choosen to guess.
* Each player got 5 attempts to guess the word.
*/

function PlayMotus(){
var words = ['academy', 'century', 'economy', 'fashion', 'freedom', 
	'mystery', 'revenue', 'totally', 'upscale', 'weekend'];

var game = {};

game.motus = motus;
game.guessWord = words[Math.floor(Math.random() * words.length)];
game.recall = [' ', ' ', ' ', ' ', ' ', ' ', ' '];
game.counter = 0;
return game;
}

var motus = function(playerTry){
	var timer = Set

	this.recall.splice(0, 1, this.guessWord[0])
	
	if (playerTry[0] !== this.guessWord[0] || playerTry.length !== this.guessWord.length){
		
		console.log("Please choose a word of " + this.guessWord.length + " characters that starts with " + this.guessWord[0]);
		return this.recall;
	}

	var guessWordAcc = this.guessWord.split('');

	var tryAcc = playerTry.split('');

	for (var i = 1; i < tryAcc.length; i++){
		for (var j = 0; j < guessWordAcc.length; j++){
			if (tryAcc[i] === guessWordAcc[j]) {
				if (i === j){
					this.recall.splice(i, 1, tryAcc[i]);
				} else {
				this.recall.splice(i, 1, tryAcc[i]);
				}
			} 
		}
	}
	
	this.counter++;

	if (this.recall.join('') === this.guessWord){
			return 'Congratulations, You guessed the word !'
	}

	if (this.counter > 4){
		return 'You loose ! The word is ' + this.guessWord;
	}

	return this.recall;
}
