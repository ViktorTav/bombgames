export class Window {
    #id;

    constructor(id) {
        this.#id = id;
    }

    get id() {
        return this.#id;
    }

    set id(id) {
        this.#id = id;
    }
}
