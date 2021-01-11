function playGame(playerInput) {
	clearMessages();

	function getMoveName(argMoveId) {
		if (argMoveId == 1) {
			return 'kamień';
		} else
		if (argMoveId == 2) {
			return 'papier';
		} else
		if (argMoveId == 3) {
			return 'nożyce';
		}
		printMessage('Nie znam ruchu o id ' + argMoveId + '.');
		return 'nieznany ruch';
	}
	// computerMove
	let randomNumber = Math.floor(Math.random() * 3 + 1);
	// console.log('Wylosowana liczba to: ' + randomNumber);
	let argComputerMove = getMoveName(randomNumber);
	printMessage('Mój ruch to: ' + argComputerMove);
	//playerMove
	console.log('Gracz wpisał: ' + playerInput);
	let argPlayerMove = getMoveName(playerInput);
	printMessage('Twój ruch to: ' + argPlayerMove);
	// result
	function displayResult(argComputerMove, argPlayerMove) {
		// console.log('moves:', argComputerMove, argPlayerMove);
		printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
		if (argComputerMove == argPlayerMove) {
			printMessage('Remis!');
		} else
		if ((argComputerMove == 'kamień' && argPlayerMove == 'papier') || (argComputerMove == 'papier' && argPlayerMove == 'nożyce') || (argComputerMove == 'nożyce' && argPlayerMove == 'kamień')) {
			printMessage('Brawo! Ty wygrywasz');
			scoreuser++;
			scoreuserDisplay.textContent = scoreuser;
			// }else
			// if(argPlayerMove == 'nieznany ruch') {
			// 	printMessage('Grasz nieuczciwie. Stawiasz piwo i dam Ci jeszcze szanse');
		} else {
			printMessage('Przykro mi. Przegrałeś');
			scorecomputer++;
			scorecomputerDisplay.textContent = scorecomputer;
		}
	}
	displayResult(argComputerMove, argPlayerMove);
}
document.getElementById('play-rock').addEventListener('click', function() {
	playGame(1);
});
document.getElementById('play-paper').addEventListener('click', function() {
	playGame(2);
});
document.getElementById('play-scissors').addEventListener('click', function() {
	playGame(3);
});

let scoreuserDisplay = document.getElementById('scoreuser');
let scorecomputerDisplay = document.getElementById('scorecomputer');
let scoreuser = 0;
let scorecomputer = 0;