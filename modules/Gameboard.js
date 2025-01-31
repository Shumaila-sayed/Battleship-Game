import Ship from './ship.js';

export default class Gameboard {
	constructor() {
		this.board = [];
		this.createBoard();
		this.shipArray = [];
		this.ships = [
			new Ship('carrier', 5),
			new Ship('battleship', 4),
			new Ship('destroyer', 3),
			new Ship('submarine', 3),
			new Ship('patrol boat', 2),
		];
		this.missedCoordinates = [];
		this.hitShipCoordinates = [];
	}

	createBoard() {
		let rows = 10;
		let columns = 10;

		for (let i = 0; i < rows; i++) {
			this.board[i] = [];
			for (let j = 0; j < columns; j++) {
				this.board[i][j] = '';
			}
		}
	}

	placeShip(x, y, ship, isHorizontal) {
		const incrementX = isHorizontal ? 0 : 1;
		const incrementY = isHorizontal ? 1 : 0;

		for (let i = 0; i < ship.length; i++) {
			const newX = x + i * incrementX;
			const newY = y + i * incrementY;
			this.shipArray.push([newX, newY]);
			this.board[newX][newY] = ship;
		}
	}

	randomPlaceShip() {
		this.ships.forEach((ship) => {
			let placed = false;
			while (!placed) {
				const randomX = Math.floor(Math.random() * 10);
				const randomY = Math.floor(Math.random() * 10);
				const isHorizontal = Math.random() < 0.5;

				if (this.#checkLegalPos(randomX, randomY, ship, isHorizontal)) {
					this.placeShip(randomX, randomY, ship, isHorizontal);
					placed = true;
				}
			}
		});
	}

	#checkLegalPos(x, y, ship, isHorizontal) {
		const incrementX = isHorizontal ? 0 : 1;
		const incrementY = isHorizontal ? 1 : 0;

		for (let i = 0; i < ship.length; i++) {
			const newX = x + i * incrementX;
			const newY = y + i * incrementY;

			if (newX < 0 || newX >= 10 || newY < 0 || newY >= 10) return false;
			if (this.board[newX][newY] !== '') return false;
		}
		return true;
	}

	receiveAttack(x, y) {
		if (this.board[x][y] !== '') {
			this.board[x][y].hit();
			this.hitShipCoordinates.push([x, y]);
			return true;
		} else {
			this.missedCoordinates.push([x, y]);
			return true
		}

	}

	isAllShipsSunk() {
		let shipsSunk = this.ships.every((ship) => {
			return ship.isSunk();
		});
		return shipsSunk;
	}

	reset() {
		this.createBoard();
	}
}