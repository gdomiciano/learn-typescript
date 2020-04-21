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
    let logger: (value:string) => void;

    if (score <0) {
        logger = logError;
    } else {
        logger = logMessage;
    }

    const scoreElement: HTMLElement | null = document.querySelector('#postedScores');
    scoreElement!.innerText = `${score} - ${playerName}`;

    logger(`Score: ${score}`);
}

document.querySelector('#startGame')!.addEventListener('submit', startGame)

const logMessage = (message:string) => console.log(message)

function logError(err:string):void {
    console.error(err)
}