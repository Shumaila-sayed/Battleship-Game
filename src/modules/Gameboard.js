export default class Gameboard {
    #shipArray = []
	constructor() {
		this.board = [];
		this.createBoard();
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

	getBoard() {
		return this.board;
	}

	placeShip(x, y, ship, isHorizontal) {
		if (!this.#checkLegalPos(x, y, ship, isHorizontal))
			throw new Error('invalid coordinates');

		this.#shipArray.push(ship);

		const incrementX = isHorizontal ? 0 : 1;
		const incrementY = isHorizontal ? 1 : 0;

		for (let i = 0; i < ship.length; i++) {
			const newX = x + i * incrementX;
			const newY = y + i * incrementY;

			this.board[newX][newY] = ship;
		}
	}

	#checkLegalPos(x, y, ship, isHorizontal) {
		const incrementX = isHorizontal ? 0 : 1;
		const incrementY = isHorizontal ? 1 : 0;

		for (let i = 0; i < ship.length; i++) {
			const newX = x + i * incrementX;
			const newY = y + i * incrementY;

			if (newX < 0 || newX >= 10 || newY < 0 || newY >= 10)
				return false;

			if (this.board[newX][newY] !== '') return false;
		}
		return true;
	}

	receiveAttack(pos) {
		const x = pos[0];
		const y = pos[1];
		if (this.board[x][y] !== '') {
			this.board[x][y].hit();
		} else {
			this.missedAttacks([x, y]);
		}
	}

	missedAttacks(arr) {
		let missedCoordinates = [];
		missedCoordinates.push(arr);
		return missedCoordinates;
	}

	isAllShipsSunk() {
		let shipsSunk = false;
		shipsSunk = this.#shipArray.every((ship) => {
			return ship.isSunk() == true;
		});
		return shipsSunk;
	}

	reset() {
		this.createBoard();
		Display.update();
	}
}