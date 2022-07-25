export class ProductFeature {
    #icon;
    #text;

    constructor(icon, text) {
        this.#icon = icon;
        this.#text = text;
    }

    get icon() {
        return this.#icon;
    }

    get text() {
        return this.#text;
    }

    set icon(icon) {
        this.#icon = icon;
    }

    set text(text) {
        this.#text = text;
    }
}
