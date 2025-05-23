import { Player, ComputerPlayer } from '../modules/player.js';
import  Gameboard  from '../modules/Gameboard.js';

test('toggleTurn method should change isTurn boolean', () => {
	let player = new Player('Jimmy');
	player.toggleTurn();
	expect(player.isTurn).toBeFalsy();
	player.toggleTurn();
	expect(player.isTurn).toBeTruthy();
});

test('ComputerPlayer should have same properties as Player', () => {
	let cpuPlayer = new ComputerPlayer('Jimmy');
	expect(cpuPlayer.name).toBe('Jimmy');
	expect(cpuPlayer.gameboard).toEqual(new Gameboard());
	expect(cpuPlayer.isTurn).toBeTruthy();
});
