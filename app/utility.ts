class Utility {
    static getInputValue(elementId: string): string {
        const inputElement: HTMLInputElement = <HTMLInputElement>document.querySelector(`#${elementId}`)
        return inputElement.value;
    }
}