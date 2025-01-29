import Ship from '../modules/ship';

it('Ship class exists', () => {
	expect(typeof Ship).toBe('function');
});

it('Ship has length', () => {
	const ship = new Ship('', 2);
	expect(ship.length).toBe(2);
});

it('Hit function', () => {
	const ship = new Ship('', 2);
	ship.hit();
	expect(ship.hitNum).toBe(1);
});

it('Getting hit twice', () => {
	const ship = new Ship('', 2);
	ship.hit();
	ship.hit();
	ship.hit();
	expect(ship.hitNum).toBe(3);
});

it('isSunk function', () => {
	const ship = new Ship('', 2);
	expect(ship.isSunk()).toBe(false);
});

it('Ship sunk', () => {
	const ship = new Ship('', 2);
	ship.hit();
	ship.hit();
	expect(ship.isSunk()).toBe(true);
});

it('Ship name', () => {
	const ship = new Ship('Patrol Boat', 2);
	expect(ship.name).toBe('Patrol Boat');
});
