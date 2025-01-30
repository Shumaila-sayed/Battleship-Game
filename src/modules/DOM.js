import { Game } from "./controller.js";

export const Display = (() => {
    const playerBoard = document.querySelector('.player-board');
    const computerBoard = document.querySelector('#computer');
    const dialog = document.getElementById('dialog');
    const dialogMessage = document.getElementById('dialog-message');
    const heading = document.querySelector('h1')
    
    // function update() {
        
    // }

    function showShips() {
        const shipPoints = Game.humanPlayer.gameboard.shipArray;

        shipPoints.forEach((points) => {
            const x = points[0];
            const y = points[1];
            const cells = document.querySelectorAll('.player-cell');

            cells.forEach((cell) => {
                if (parseInt(cell.dataset.indexX) === x && parseInt(cell.dataset.indexY) === y) {
                    cell.classList.add('ship')
                }
            })
        })
    }


    function init() {
        //  setupEventListeners(); 
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                const cell = document.createElement('div');
                cell.className = 'player-cell';
                cell.dataset.indexX = i;
                cell.dataset.indexY = j;
                playerBoard.appendChild(cell);
            }
        }
         for (let i = 0; i < 10; i++) {
			for (let j = 0; j < 10; j++) {
				const cell = document.createElement('div');
				cell.className = 'computer-cell';
				cell.dataset.indexX = i;
				cell.dataset.indexY = j;
				computerBoard.appendChild(cell);
				}
        }

        Game.computerPlayer.gameboard.randomPlaceShip();
        Game.humanPlayer.gameboard.randomPlaceShip()
        
        showShips()
       
    }

    return { init }

})();