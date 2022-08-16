/*MOTUS GAME*/

/*
* At first, I will implement 10 words of 7 characters. 
* Each time the game is run, one word is randomly choosen to guess.
* Word guessing time is 1m30s.
*/

function PlayMotus(){
var words = ['academy', 'century', 'economy', 'fashion', 'freedom', 
	'mystery', 'revenue', 'totally', 'upscale', 'weekend'];

var game = {};

game.motus = motus;
game.guessWord = words[Math.floor(Math.random() * words.length)];

return game;
}

var motus = function(playerTry){
	
	if (playerTry[0] !== this.guessWord[0] || playerTry.length !== this.guessWord.length){
		return "Please choose a word of " + this.guessWord.length + " characters that starts with " + this.guessWord[0];
	}

	var guessWordAcc = this.guessWord.split('');

	var tryAcc = playerTry.split('');

	var recall = ['', '', '', '', '', '', '']

	for (var i = 0; i < tryAcc.length; i++){
		for (var j = 0; j < guessWordAcc.length; j++){
			if (tryAcc[i] === guessWordAcc[j]){
				if (i === j){
					recall.splice(i, 1, tryAcc[i]);
				}
				recall.splice(i, 1, tryAcc[i]);
			}
		}
	}
	console.log(recall);
	if (recall.join('') === this.guessWord){
			return 'Congratulions, You guessed the word !'
		}
}