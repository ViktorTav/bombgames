import { Contact } from "./Contact.js";

export class SocialNetwork extends Contact {
    #color;

    constructor(url, faIcon, color) {
        super(url, faIcon);
        this.#color = color;
    }

    get color() {
        return this.#color;
    }

    set color(color) {
        this.#color = color;
    }
}
