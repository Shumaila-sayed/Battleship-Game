import Gameboard from './Gameboard.js';

export class Player {
	constructor(name) {
		this.name = name;
		this.gameboard = new Gameboard();
		this.isTurn = true;
	}

	toggleTurn() {
		this.isTurn = !this.isTurn;
	}
}

export class ComputerPlayer extends Player {
	constructor(name) {
		super(name);
		this.isTurn = false;
	}

	makeRandomMove() {
		let randomX, randomY;
		do {
			randomX = Math.floor(Math.random() * 10);
			randomY = Math.floor(Math.random() * 10);
		} while (this.gameboard.hasBeenAttacked(randomX, randomY));

		return [randomX, randomY];
	}
}
