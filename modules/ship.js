export default class Ship {
	constructor(name, length) {
		this.name = name;
		this.length = length;
		this.hitNum = 0;
	}

	hit() {
		this.hitNum++;
	}

	isSunk() {
		return this.hitNum >= this.length;
	}
}