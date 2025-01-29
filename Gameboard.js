import Ship from "./ship.js";

class Gameboard {
	constructor() {
		this.board = [];
	}

	createBoard() {
		let rows = 10;
		let columns = 10;

		for (let i = 0; i < rows; i++) {
			this.board[i] = [];
			for (let j = 0; j < columns; j++) {
				this.board[i][j] = null;
			}
		}
	}

    placeShip(ship, start, horizontal = true) {
        console.log(start)
		const x = start[0];
		const y = start[1];

		if (horizontal) {
            for (let i = 0; i < ship.length; i++) {
                console.log(this.board[x][y])
                console.log(this.board[x][y + i]);
				this.board[x][y + i] = ship;
			}
		} else {
			for (let i = 0; i < ship.length; i++) {
				this.board[x + i][y] = ship;
			}
		}
	}
}

export default Gameboard;
