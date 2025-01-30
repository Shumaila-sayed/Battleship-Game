// import { Game } from "./controller";

export const Display = (() => {
    const container = document.querySelector('.container');
    const playerBoard = document.querySelector('.player-board');
    const computerBoard = document.querySelector('#computer');
    const dialog = document.getElementById('dialog');
    const dialogMessage = document.getElementById('dialog-message');
    const heading = document.querySelector('h1')
    
    // function update() {
        
    // }

    function init() {
        //  setupEventListeners(); 
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                const cell = document.createElement('div');
                cell.className = 'cell';
                cell.dataset.indexX = i;
                cell.dataset.indexY = j;
                playerBoard.appendChild(cell);
            }
        }
         for (let i = 0; i < 10; i++) {
			for (let j = 0; j < 10; j++) {
				const cell = document.createElement('div');
				cell.className = 'cell';
				cell.dataset.indexX = i;
				cell.dataset.indexY = j;
				computerBoard.appendChild(cell);
				}
		}
       
    }

    function displayBoard(board) {
       

    }

    return { init }

})();