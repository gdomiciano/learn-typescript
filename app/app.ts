import { Player } from "./player";
import { Game } from "./game";
import * as Helpers from "./utility";

let newGame: Game;

document.querySelector('#nameForm')!.addEventListener('submit', (e) => {
    e.preventDefault()
    const player: Player = new Player;
    player.name = Helpers.getValue('playerName');

    const problemCount: number  = Number(Helpers.getValue('problemCount'));
    const factor: number  = Number(Helpers.getValue('factor'));

    newGame = new Game(player, problemCount, factor);
    newGame.displayGame();
}, false);


document.querySelector('#calculate')!.addEventListener('click', () => {
    newGame.calculateScore();
})