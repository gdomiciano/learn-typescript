/// <reference path="player.ts" />
/// <reference path="game.ts" />

let newGame: Game;

document.querySelector('#nameForm')!.addEventListener('submit', (e) => {
    e.preventDefault()
    const player: Player = new Player;
    player.name = Utility.getInputValue('playerName');

    const problemCount: number  = Number(Utility.getInputValue('problemCount'));
    const factor: number  = Number(Utility.getInputValue('factor'));

    newGame = new Game(player, problemCount, factor);
    newGame.displayGame();
}, false);


document.querySelector('#calculate')!.addEventListener('click', () => {
    newGame.calculateScore();
})