let scoreuser = 0,
	scorecomputer = 0;
const scoreuserDisplay = document.getElementById('scoreuser'),
	scorecomputerDisplay = document.getElementById('scorecomputer');
document.getElementById('play-rock').addEventListener('click', function () {
	playGame(1);
});
document.getElementById('play-paper').addEventListener('click', function () {
	playGame(2);
});
document.getElementById('play-scissors').addEventListener('click', function () {
	playGame(3);
});

const playGame = function (playerInput) {
	const getMoveName = function (argMoveId) {
		if (argMoveId == 1) {
			return 'kamień';
		} else if (argMoveId == 2) {
			return 'papier';
		} else if (argMoveId == 3) {
			return 'nożyce';
		}
	};
	const randomNumber = Math.floor(Math.random() * 3 + 1),
		argComputerMove = getMoveName(randomNumber);
	const argPlayerMove = getMoveName(playerInput);

	const displayResult = function (argComputerMove, argPlayerMove) {
		printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
		if (argComputerMove == argPlayerMove) {
			printMessage('Remis!');
		} else if ((argComputerMove == 'kamień' && argPlayerMove == 'papier') || (argComputerMove == 'papier' && argPlayerMove == 'nożyce') || (argComputerMove == 'nożyce' && argPlayerMove == 'kamień')) {
			printMessage('Brawo! Ty wygrywasz');
			scoreuser++;
			scoreuserDisplay.textContent = scoreuser;
		} else {
			printMessage('Przykro mi. Przegrałeś');
			scorecomputer++;
			scorecomputerDisplay.textContent = scorecomputer;
		}
	};
	clearMessages();
	displayResult(argComputerMove, argPlayerMove);
};


// pętla do rozegrania 1000 gier

// for (let i = 0; i <= 1000; i++) {
// 	let r