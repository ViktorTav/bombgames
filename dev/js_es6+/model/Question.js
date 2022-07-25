export class Question {
    #title;
    #answer;

    constructor(title, answer) {
        this.#title = title;
        this.#answer = answer;
    }

    get title() {
        return this.#title;
    }

    get answer() {
        return this.#answer;
    }

    set title(title) {
        this.#title = title;
    }

    set answer(answer) {
        this.#answer = answer;
    }
}
