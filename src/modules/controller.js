import { Player, ComputerPlayer } from './player.js';
import { Display } from './DOM.js';

export const Game = (() => {
	let humanPlayer = new Player('You');
	let computerPlayer = new ComputerPlayer('Computer');

	function computerTurn() {
		if (!humanPlayer.isTurn) {
			const [x, y] = computerPlayer.makeRandomMove();  
		   computerGameFlow(x, y)
		}
	}

	function checkWinner(humanShips, computerShips) {
		const humanShipStatus = humanShips.every((ship) => {
			return ship.isSunk()
		})
		
		const computerShipStatus = computerShips.every((ship) => {
			return ship.isSunk()
		})

		if (humanShipStatus) {
			return computerPlayer.name;
		} else if (computerShipStatus) {
			return humanPlayer.name;
		} else {
			return null;
		}

	}

	function humanGameFlow(x, y) {
		const humanShips = humanPlayer.gameboard.ships;
		const computerShips = computerPlayer.gameboard.ships;
		if (computerPlayer.gameboard.receiveAttack(x, y)) {
			Display.displayMissedHits();
			Display.displaySuccessfulHits();
			const winner = checkWinner(humanShips, computerShips);
			if (winner) {
				Display.showDialog(`${winner} won!`);
			} else {
				humanPlayer.toggleTurn();
				computerTurn();
			}
		}
	}
	
	function computerGameFlow(x, y) {
		const humanShips = humanPlayer.gameboard.ships;
		const computerShips = computerPlayer.gameboard.ships;
			if (humanPlayer.gameboard.receiveAttack(x, y)) {
				Display.computerMissedHits();
				Display.computerSuccessfulHits();
				const winner = checkWinner(humanShips, computerShips);
				if (winner) {
					Display.showDialog(`${winner} won!`);
				} else {
					humanPlayer.toggleTurn();
				}
			}
		}

	function resetGame() {
		humanPlayer.gameboard.reset();
		computerPlayer.gameboard.reset();
	}

	return { humanGameFlow, computerGameFlow , resetGame, humanPlayer, computerPlayer, computerTurn };
})();
