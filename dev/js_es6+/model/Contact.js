export class Contact {
    #url;
    #faIcon;

    constructor(url, faIcon) {
        this.#url = url;
        this.#faIcon = faIcon;
    }

    get url() {
        return this.#url;
    }

    get faIcon() {
        return this.#faIcon;
    }

    set url(url) {
        this.#url = url;
    }

    set faIcon(faIcon) {
        this.#faIcon = faIcon;
    }
}
