import { Player, ComputerPlayer } from "./player.js";

export const Game = (() => {
    
let humanPlayer = new Player('You');
let computerPlayer = new ComputerPlayer('Computer')

    function computerAttack() {
        const randomX = Math.floor(Math.random() * 10);
        const randomY = Math.floor(Math.random() * 10);
        humanPlayer.gameboard.receiveAttack(randomX, randomY);
        humanPlayer.toggleTurn()
    }

    function checkWinner(humanBoard, computerBoard) {
        if (humanBoard.isAllShipsSunk()) {
            return computerPlayer.name
        } else if (computerBoard.isAllShipsSunk()) {
            return humanPlayer.name
        } else {
            return null;
        }
    }
    
    function gameFlow(x, y) {
        const humanBoard = humanPlayer.gameboard;
        const computerBoard = computerPlayer.gameboard;

        if (humanPlayer.gameboard.receiveAttack(x, y) || computerPlayer.gameboard.receiveAttack(x, y)) {
            const winner = checkWinner(humanBoard, computerBoard);
            if (winner) {
                Display.showDialog(`${winner} wins!`);
            } else {
                if (humanPlayer.isTurn === false) {
                    humanPlayer.toggleTurn();
                }
            }
        }
    }
    
    function resetGame() {
        humanPlayer.gameboard.reset();
        computerPlayer.gameboard.reset();
    }

    return { gameFlow, resetGame, computerAttack, humanPlayer, computerPlayer }

})();