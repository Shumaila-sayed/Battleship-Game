import { Gameboard } from './Gameboard.js';

export class Player {
	constructor() {
		this.gameboard = new Gameboard();
		this.isTurn = false;
	}

	toggleTurn() {
		this.isTurn = this.isTurn ? false : true;
	}
}

export class ComputerPlayer extends Player {
	constructor(name) {
		super(name);
	}
}
