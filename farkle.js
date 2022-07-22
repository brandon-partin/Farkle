var diceArr = [];
var player1 = {};
var player2 = {};
player1.score = 0;
player2.score = 0;

function initializeDice(){
	for(i = 0; i < 6; i++){
		diceArr[i] = {};
		diceArr[i].id = "die" + i + 1;
		diceArr[i].value = i + 1;
		diceArr[i].clicked = 0;
	}
}

/*Rolling dice values*/
function rollDice(){
	document.getElementById(diceArr[1].id).setAttribute("src", "images/6.png");
	//document.getElementById("player1Total").innerHTML = "1";
	for(var i=0; i < 6; i++){
		if(diceArr[i].clicked === 0){
			diceArr[i].value = Math.floor((Math.random() * 6) + 1);
		}
	}
	//diceArr[2].value = 6;
	updateDiceImg();

}

/*Updating images of dice given values of rollDice*/
function updateDiceImg(){
	var diceImage;
	for(var i = 0; i < 6; i++){
	/*	switch (diceArr[i].value) {
			case 1:
				diceImage = "images/1.png";
				break;
			case 2:
				diceImage = "images/2.png";
								break;
			case 3:
				diceImage = "images/3.png";
								break;
			case 4:
				diceImage = "images/4.png";
								break;
			case 5:
				diceImage = "images/5.png";
								break;
			case 6:
				diceImage = "images/6.png";
								break;
			default: break;
		} */


		diceImage = "images/" + i + ".png";
		//document.getElementById(diceArr[i].id).src = diceImage;
		document.getElementById(diceArr[i].id).setAttribute("src", diceImage);
	}
}

function diceClick(img){
	//document.getElementById("player1Roll").innerHTML = "rolled";
	var i = img.getAttribute("data-number");

	img.classList.toggle("transparent");
	if(diceArr[i].clicked === 0){
		diceArr[i].clicked == 1;
		diceArr[i].setAttribute("src", "images/3.png");
		document.getElementById(diceArr[i].id).setAttribute("src", "images/6.png");
	}
	else{
		diceArr[i].clicked == 0;
	}


}

function bankScore() {
	//trying to change dice image, which is not functioning currently. This is not what this function
	//would be used for.
	document.getElementById("player2Total").innerText = "see, I can change this."
	document.getElementById("player2Roll").innerText = "Why can't I change the dice image?."
	document.getElementById(diceArr[3].id).setAttribute("src", "images/1.png");
	document.getElementById(diceArr[4].id).src = 'images/4.png';
}



//controls game logic
function gameState() {
//I have spent all my time trying to implement the updateDiceImg() function that I haven't had time to code any
	//of the game logic
}