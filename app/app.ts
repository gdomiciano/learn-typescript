function startGame(e:Event) {
    e.preventDefault()
    let playerName: string | undefined = getInputValue('playerName');
    logPlayer(playerName);

    postScore(100, playerName);
}

function logPlayer (name: string = 'MultiMath Player'): void {
    console.log(`player name is: ${name}`)
}

function getInputValue(elementId: string): string | undefined {
    const inputElement: HTMLInputElement = <HTMLInputElement>document.querySelector(`#${elementId}`)

    if (inputElement.value === '') {
        return undefined
    } else {
        return inputElement.value
    }
}

function postScore(score: number, playerName?: string) : void {
    const scoreElement: HTMLElement | null = document.querySelector('#postedScores');
    scoreElement!.innerText = `${score} - ${playerName}`;
}

document.querySelector('#startGame')!.addEventListener('submit', startGame)