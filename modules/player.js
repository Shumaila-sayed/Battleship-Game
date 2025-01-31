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
	}

	makeRandomMove() {
			const randomX = Math.floor(Math.random() * 10);
			const randomY = Math.floor(Math.random() * 10);
		return [randomX, randomY];
	}
}
