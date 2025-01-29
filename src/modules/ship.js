export default class Ship {
    constructor(name, length) {
        this.name = name;
        this.length = length;
        this.hitNum = 0;
        this.sunk = false;
    }

    hit() {
        return this.hitNum++;
    }

    isSunk() {
        if (this.hitNum === this.length) this.sunk = true;
        return this.sunk;
    }
}