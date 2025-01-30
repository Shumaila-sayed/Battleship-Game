import Gameboard from '../modules/Gameboard';
import Ship from '../modules/ship';

let game;

beforeEach(() => {
	game = new Gameboard();
});

it('Gameboard class exists', () => {
	expect(typeof Gameboard).toBe('function');
});

it('Gameboard is not empty', () => {
	expect(game.board.length).toBe(10);
});

it('ship on board', () => {
	const ship = new Ship('Submarine', 3);
	game.placeShip(3, 2, ship, true);
	expect(game.board[3][2]).toBe(ship);
});

it('attack hit the ship', () => {
	const ship = new Ship('Submarine', 3);
	game.placeShip(3, 2, ship, true);
	game.receiveAttack([3, 2]);
	game.receiveAttack([3, 3]);
	expect(ship.hitNum).toBe(2);
});

it('report if all ship sunk', () => {
	const ship = new Ship('Submarine', 3);
	game.placeShip(3, 2, ship, true);
	const ship2 = new Ship('Patrol Boat', 2);
	game.placeShip(7, 5, ship2, true);
	game.receiveAttack([3, 2]);
	game.receiveAttack([3, 3]);
	game.receiveAttack([3, 4]);
	game.receiveAttack([7, 5]);
	game.receiveAttack([7, 6]);
	expect(game.isAllShipsSunk()).toBe(true);
});
