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

it('get missed shots coordinates', () => {
    const game = new Gameboard();
    game.createBoard();
    expect(game.receiveAttack([1, 3])).toEqual([[1, 3]])
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