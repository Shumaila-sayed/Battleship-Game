import { Game } from './controller.js';

export const Display = (() => {
	const playerBoard = document.querySelector('.player-board');
	const computerBoard = document.querySelector('#computer');
	const dialog = document.getElementById('dialog');
	const dialogMessage = document.getElementById('dialog-message');
	const closeButton = document.getElementById('close-dialog');

	function computerMissedHits() {
		const missedCoordinates = Game.humanPlayer.gameboard.missedCoordinates;
		missedCoordinates.forEach((coordinate) => {
			const x = coordinate[0];
			const y = coordinate[1];
			const cells = document.querySelectorAll('.player-cell');

			cells.forEach((cell) => {
				if (
					parseInt(cell.dataset.indexX) === x &&
					parseInt(cell.dataset.indexY) === y
				) {
					cell.classList.add('noHit');
				}
			});
		});
	}

	function computerSuccessfulHits() {
		const hitCoordinates = Game.humanPlayer.gameboard.hitShipCoordinates;

		hitCoordinates.forEach((coordinate) => {
			const x = coordinate[0];
			const y = coordinate[1];
			const cells = document.querySelectorAll('.player-cell');

			cells.forEach((cell) => {
				if (
					parseInt(cell.dataset.indexX) === x &&
					parseInt(cell.dataset.indexY) === y
				) {
					cell.classList.remove('ship')
					 cell.classList.add('hit')
					// cell.classList.add('hit');
				}
			});
		});
		
	}

	function displayMissedHits() {
		const missedCoordinates = Game.computerPlayer.gameboard.missedCoordinates;

		missedCoordinates.forEach((coordinate) => {
			const x = coordinate[0];
			const y = coordinate[1];
			const cells = document.querySelectorAll('.computer-cell');

			cells.forEach((cell) => {
				if (parseInt(cell.dataset.indexX) === x && parseInt(cell.dataset.indexY) === y) {
					cell.classList.add('noHit');
				}
			});
		});
	}

	function displaySuccessfulHits() {
		const hitCoordinates = Game.computerPlayer.gameboard.hitShipCoordinates;

		hitCoordinates.forEach((coordinate) => {
			const x = coordinate[0];
			const y = coordinate[1];
			const cells = document.querySelectorAll('.computer-cell');

			cells.forEach((cell) => {
				if (
					parseInt(cell.dataset.indexX) === x &&
					parseInt(cell.dataset.indexY) === y
				) {
					cell.classList.add('hit');
				}
			});
		});
	}

	function showDialog(message) {
		dialogMessage.textContent = message;
		dialog.style.display = 'flex';
	}

	function hideDialog() {
		dialog.style.display = 'none';
	}

	function resetAll() {
		Game.humanPlayer.gameboard.reset();
		Game.computerPlayer.gameboard.reset();
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

	function init() {
		for (let i = 0; i < 10; i++) {
			for (let j = 0; j < 10; j++) {
				const cell = document.createElement('div');
				cell.className = 'player-cell';
				cell.dataset.indexX = i;
				cell.dataset.indexY = j;
				playerBoard.appendChild(cell);
			}
		}
		for (let i = 0; i < 10; i++) {
			for (let j = 0; j < 10; j++) {
				const cell = document.createElement('div');
				cell.className = 'computer-cell';
				cell.dataset.indexX = i;
				cell.dataset.indexY = j;
				computerBoard.appendChild(cell);
			}
		}

		Game.computerPlayer.gameboard.randomPlaceShip();
		Game.humanPlayer.gameboard.randomPlaceShip();
		setupEventListeners();
		showShips();
	}

	return { showDialog, init, displayMissedHits, displaySuccessfulHits, computerMissedHits, computerSuccessfulHits};
})();