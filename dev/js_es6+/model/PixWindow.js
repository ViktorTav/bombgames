import { Window } from "./Window.js";

export class PixWindow extends Window {
    #product;
    #pix;

    constructor(product, pix) {
        super(null);
        this.#product = product;
        this.#pix = pix;
    }

    get product() {
        return this.#product;
    }

    get pix() {
        return this.#pix;
    }

    set product(product) {
        this.#product = product;
    }

    set pix(pix) {
        this.#pix = pix;
    }
}
