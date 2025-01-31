import { Game } from './controller.js';

export const Display = (() => {
	const playerBoard = document.querySelector('.player-board');
	const computerBoard = document.querySelector('#computer');
	const dialog = document.getElementById('dialog');
	const dialogMessage = document.getElementById('dialog-message');
	const closeButton = document.getElementById('close-dialog');

	function updateBoard(boardClass, coordinates, hitClass, removeShip = false) {
		const cells = document.querySelectorAll(`.${boardClass}`);
		coordinates.forEach(([x, y]) => {
			cells.forEach((cell) => {
				if (
					parseInt(cell.dataset.indexX) === x &&
					parseInt(cell.dataset.indexY) === y
				) {
					if (removeShip) cell.classList.remove('ship');
					cell.classList.add(hitClass);
				}
			});
		});
	}

	function computerMissedHits() {
		updateBoard(
			'player-cell',
			Game.humanPlayer.gameboard.missedCoordinates,
			'noHit'
		);
	}

	function computerSuccessfulHits() {
		updateBoard(
			'player-cell',
			Game.humanPlayer.gameboard.hitShipCoordinates,
			'hit',
			true
		);
	}

	function displayMissedHits() {
		updateBoard(
			'computer-cell',
			Game.computerPlayer.gameboard.missedCoordinates,
			'noHit'
		);
	}

	function displaySuccessfulHits() {
		updateBoard(
			'computer-cell',
			Game.computerPlayer.gameboard.hitShipCoordinates,
			'hit'
		);
	}

	function showDialog(message) {
		dialogMessage.textContent = message;
		dialog.style.display = 'flex';
	}

	function hideDialog() {
		dialog.style.display = 'none';
	}

	function resetAll() {
		Game.resetGame();
		hideDialog();
	}

	function showShips() {
		const shipPoints = Game.humanPlayer.gameboard.shipArray;

		shipPoints.forEach((points) => {
			const x = points[0];
			const y = points[1];
			const cells = document.querySelectorAll('.player-cell');

			cells.forEach((cell) => {
				if (
					parseInt(cell.dataset.indexX) === x &&
					parseInt(cell.dataset.indexY) === y
				) {
					cell.classList.add('ship');
				}
			});
		});
	}

	function setupEventListeners() {
		computerBoard.addEventListener('click', (event) => {
			if (event.target.classList.contains('computer-cell')) {
				const x = parseInt(event.target.dataset.indexX);
				const y = parseInt(event.target.dataset.indexY);
				Game.humanGameFlow(x, y);
			}
		});

		closeButton.addEventListener('click', resetAll);
	}

	function createBoard(boardElement, cellClass) {
		for (let i = 0; i < 10; i++) {
			for (let j = 0; j < 10; j++) {
				const cell = document.createElement('div');
				cell.className = cellClass;
				cell.dataset.indexX = i;
				cell.dataset.indexY = j;
				boardElement.appendChild(cell);
			}
		}
	}

	function init() {
		createBoard(playerBoard, 'player-cell');
		createBoard(computerBoard, 'computer-cell');

		Game.computerPlayer.gameboard.randomPlaceShip();
		Game.humanPlayer.gameboard.randomPlaceShip();
		setupEventListeners();
		showShips();
	}

	return { showDialog, init, displayMissedHits, displaySuccessfulHits, computerMissedHits, computerSuccessfulHits};
})();