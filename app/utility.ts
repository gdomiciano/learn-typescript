
function getInputValue(elementId: string): string {
    const inputElement: HTMLInputElement = <HTMLInputElement>document.querySelector(`#${elementId}`)
    return inputElement.value;
}

function logger(message:string) {
    console.log(message)
}

export {getInputValue as getValue, logger}