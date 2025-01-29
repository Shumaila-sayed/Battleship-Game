export default class Gameboard {
	constructor() {
		this.board = [];
	}

	createBoard() {
		let rows = 10;
		let columns = 10;

		for (let i = 0; i < rows; i++) {
			this.board[i] = [];
			for (let j = 0; j < columns; j++) {
				this.board[i][j] = 'O';
			}
		}
	}

    placeShip(ship, start, horizontal = true) {
		const x = start[0];
		const y = start[1];

		if (horizontal) {
            for (let i = 0; i < ship.length; i++) {
				this.board[x][y + i] = ship;
			}
		} else {
			for (let i = 0; i < ship.length; i++) {
				this.board[x + i][y] = ship;
			}
		}
    }
    
    receiveAttack(pos) {
        const x = pos[0];
        const y = pos[1];
        if (this.board[x][y] !== 'O') {
            this.board[x][y].hit();
        } else {
            this.missedAttacks([x, y])
        }
    }

    missedAttacks(arr) {
        let missedCoordinates = []
        missedCoordinates.push(arr);
        return missedCoordinates;
    }

    isAllShipsSunk() {
        let shipsSunk = false;
        let ships = []
        for (let i = 0; i < 10; i++) {
			for (let j = 0; j < 10; j++) {
                if (this.board[i][j] !== 'O') {
                    ships.push(this.board[i][j]);
                };
			}
        }
        shipsSunk = ships.every(ship => {
           return ship.isSunk() == true;
         })
        return shipsSunk
    }
}