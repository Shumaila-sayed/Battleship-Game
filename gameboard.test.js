import Gameboard from './Gameboard'
import Ship from './ship'

it('Gameboard class exists', () => {
    expect(typeof Gameboard).toBe('function')
})

// it('Gameboard creates an array', () => {
//     const game = new Gameboard()
//     expect(game.board).toEqual([])
// })

it('Gameboard is not empty', () => {
    const game = new Gameboard();
    game.createBoard()
    expect(game.board.length).toBe(10);
})


it('ship on board', () => {
    const game = new Gameboard();
    game.createBoard()
    const ship = new Ship('Submarine', 3);
    game.placeShip(ship, [3, 2]);
    expect(game.board[3][2]).toBe(ship)
})

it('attack hit the ship', () => {
    const game = new Gameboard();
	game.createBoard();
	const ship = new Ship('Submarine', 3);
    game.placeShip(ship, [3, 2]);
    game.receiveAttack([3, 2]);
    game.receiveAttack([3, 3]);
    expect(ship.hitNum).toBe(2);
})

it('report if all ship sunk', () => {
    const game = new Gameboard();
	game.createBoard();
	const ship = new Ship('Submarine', 3);
    game.placeShip(ship, [3, 2]);
    const ship2 = new Ship('Patrol Boat', 2);
    game.placeShip(ship2, [7, 5])
	game.receiveAttack([3, 2]);
    game.receiveAttack([3, 3]);
    game.receiveAttack([3, 4]);
    game.receiveAttack([7, 5]);
    game.receiveAttack([7, 6]);
    expect(game.isAllShipsSunk()).toBe(true)
})