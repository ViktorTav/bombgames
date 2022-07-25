export class SiteFeature {
    #name;
    #description;
    #faIcon;

    constructor(name, description, faIcon) {
        this.#name = name;
        this.#description = description;
        this.#faIcon = faIcon;
    }

    get name() {
        return this.#name;
    }

    get description() {
        return this.#description;
    }

    get faIcon() {
        return this.#faIcon;
    }

    set name(name) {
        this.#name = name;
    }

    set description(description) {
        this.#description = description;
    }

    set faIcon(faIcon) {
        this.#faIcon = faIcon;
    }
}
