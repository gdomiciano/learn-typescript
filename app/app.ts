function startGame() {
    let playerName: string = 'Geisy';
    logPlayer(playerName);
}

function logPlayer (name) {
    console.log(`player name is: ${name}`)
}

document.querySelector('#startGame')!.addEventListener('click', startGame)