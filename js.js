const again = document.querySelector('.again');
let number = document.querySelector('.number');
const main = document.querySelector('main');
let guess = document.querySelector('.guess');
const Check = document.querySelector('.check');
let message = document.querySelector('.message');
let score = document.querySelector('.score');
let highScore = document.querySelector('.highscore');

let secretNumber = Math.trunc(Math.random() * 20) + 1;
// number.textContent = number.value = secretNumber;
let totalScore = 20;
let TotalhighScore = 0;

	

function displayMsg(msg){
		message.textContent = msg;
};

function changeColor(bgColor){
		main.style.backgroundColor = bgColor;
		guess.style.backgroundColor = bgColor;	
};	


	Check.addEventListener("click", function(){
	const getInputValue = Number(guess.value);

	if (!getInputValue) {
		displayMsg("No Number...!");
	}

	 else if (getInputValue === secretNumber) {

		if (totalScore > TotalhighScore) {
		TotalhighScore = totalScore;
		highScore.textContent = TotalhighScore;
		}

		displayMsg("Correct Answer!");
		changeColor("green");	
	} 


	else if(getInputValue > secretNumber){
		displayMsg("Too high...!");
		totalScore--;
		score.textContent = totalScore;
	} 


	else if(getInputValue < secretNumber){
		displayMsg("Too low...!");
		totalScore--;
		score.textContent = totalScore;
	}	

});

	again.addEventListener("click", function(){
		secretNumber = Math.trunc(Math.random() * 20) + 1;
		totalScore = 20;
		
		number.value = 0;
		guess.textContent = guess.value = "";
		score.textContent = totalScore;
		displayMsg("Start guessing...!");
		changeColor("#000");	
	});